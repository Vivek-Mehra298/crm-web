import { useState } from "react";
import {
  Table,
  Tag,
  Space,
  Button,
  Modal,
  Form,
  Input,
  Select,
  message,
  Popconfirm,
  Grid,
  Row,
  Col,
} from "antd";
import type { ColumnType } from "antd/es/table";
import type { Lead } from "../Types/leadsType";
import {
  useLeads,
  useAddLead,
  useDeleteLead,
  useUpdateLead,
} from "../hooks/useLeads";

const { Option } = Select;
const { useBreakpoint } = Grid;

const LeadsPage = () => {
  const screens = useBreakpoint();
  const [search, setSearch] = useState("");

  // for leads data and mutations
  const { data: leads = [], isLoading } = useLeads();
  const addLead = useAddLead();
  const updateLead = useUpdateLead();
  const deleteLead = useDeleteLead();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [form] = Form.useForm(); //form instance

  //open modal
  const openModal = () => {
    setEditingLead(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  //open modal for edit
  const openEditModal = (lead: Lead) => {
    setEditingLead(lead);
    form.setFieldsValue(lead);
    setIsModalOpen(true);
  };

  //close modal
  const closModal = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  // Handle form submission for adding/editing lead
  const onFinish = (values: Omit<Lead, "id">) => {
    if (editingLead) {
      // Edit
      updateLead.mutate(
        { ...editingLead, ...values },
        {
          onSuccess: () => {
            message.success("Lead updated successfully");
            closModal();
          },
        }
      );
    } else {
      // Add
      addLead.mutate(values, {
        onSuccess: () => {
          message.success("Lead added successfully");
          closModal();
        },
      });
    }

    // Close modal and reset form
    // setIsModalOpen(false);
    // setEditingLead(null);
    // form.resetFields();
  };

  // Delete lead
  const handleDelete = (id: number) => {
    deleteLead.mutate(id, {
      onSuccess: () => message.success("Lead deleted successfully"),
    });
  };

  const columns: ColumnType<Lead>[] = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email", responsive: ["md"] },
    { title: "Phone", dataIndex: "phone", responsive: ["lg"] },
    { title: "Source", dataIndex: "source", responsive: ["lg"] },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        const color =
          status === "New"
            ? "blue"
            : status === "Contacted"
            ? "orange"
            : "green";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Actions",
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => openEditModal(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Delete Lead"
            description="Are you sure to delete this lead?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  // for serach functionality and crud operations
  const filterdLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Header */}
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col xs={24} md={12}>
          <h2 style={{ margin: 0 }}>Leads</h2>
        </Col>

        <Col xs={24} md={12} style={{ textAlign: screens.md ? "right" : "left" }}>
          <Space wrap style={{ width: "100%", justifyContent: screens.md ? "flex-end" : "flex-start" }}>
            <Input.Search
              placeholder="Search by name or email"
              allowClear
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: screens.xs ? "100%" : 220 }}
            />
            <Button type="primary" onClick={openModal} block={screens.xs}>
              + Add Lead
            </Button>
          </Space>
        </Col>
      </Row>

      {/* Leads Table */}
      <Table
        dataSource={filterdLeads}
        columns={columns}
        loading={isLoading}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        scroll={{ x: "max-content" }}
      />

      {/* Add Lead Modal */}
      <Modal
        title="Add New Lead"
        open={isModalOpen}
        onCancel={closModal}
        onOk={() => form.submit()}
        okText={editingLead ? "Update Lead" : "Add Lead"}
        width={screens.xs ? "100%" : 520}
        destroyOnClose
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter name" }]}
          >
            <Input placeholder="Enter Full Name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter email" },
              { type: "email", message: "Enter valid email" },
            ]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Please enter phone" }]}
          >
            <Input placeholder="Enter phone number" />
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: "Please enter status" }]}
          >
            <Select placeholder="Select status">
              <Option value="New">New</Option>
              <Option value="Contacted">Contacted</Option>
              <Option value="Converted">Converted</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Source"
            name="source"
            rules={[{ required: true, message: "Please enter source" }]}
          >
            <Select placeholder="Select source">
              <Option value="Website">Website</Option>
              <Option value="Referral">Referral</Option>
              <Option value="Social Media">Social Media</Option>
              <Option value="Ads">Ads</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default LeadsPage;
