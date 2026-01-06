import { Card, Col, Row, Progress, Table, Tag, Statistic } from "antd";
import {
  UserOutlined,
  RiseOutlined,
  FallOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { Pie, Line } from "@ant-design/plots";
import { type Lead } from "../Types/leadsType";
import { useLeads } from "../fServices/leads.service";

const DashboardPage: React.FC = () => {
  const { data: leads = [] } = useLeads();

  // ================= KPI COUNTS =================
  const totalLeads = leads.length;
  const newLeads = leads.filter((l) => l.status === "New").length;
  const contactedLeads = leads.filter((l) => l.status === "Contacted").length;
  const convertedLeads = leads.filter((l) => l.status === "Converted").length;

  const statusPercent = (count: number) =>
    totalLeads === 0 ? 0 : Math.round((count / totalLeads) * 100);

  // ================= PIE CHART =================
  const pieConfig = {
    data: [
      { status: "New", value: newLeads },
      { status: "Contacted", value: contactedLeads },
      { status: "Converted", value: convertedLeads },
    ],
    angleField: "value",
    colorField: "status",
    radius: 0.8,
    label: { type: "spider", labelHeight: 28 },
  };

  // ================= LINE CHART =================
  // Aggregate leads by day
  const leadsGrowthData = leads.reduce<Record<string, number>>((acc, lead) => {
    if (!lead.createdAt) return acc;

    const createdAt =
      typeof lead.createdAt === "object" && "toDate" in lead.createdAt
        ? (lead.createdAt as any).toDate()
        : new Date(lead.createdAt as any);

    const key = createdAt.toISOString().slice(0, 10); // "YYYY-MM-DD"
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  let cumulative = 0;
  const lineData = Object.entries(leadsGrowthData)
    .sort(([a], [b]) => new Date(a).getTime() - new Date(b).getTime())
    .map(([date, count]) => {
      cumulative += count;
      return { date, count: cumulative };
    });

  const lineConfig = {
    data: lineData,
    xField: "date",
    yField: "count",
    xAxis: {
      title: { text: "Date" },
      label: {
        formatter: (val: string) => {
          const d = new Date(val);
          return `${d.getDate()}/${d.getMonth() + 1}`; // DD/MM
        },
      },
    },
    yAxis: {
      title: { text: "Total Leads" },
      min: 0,
    },
    smooth: true,
    point: { size: 4, shape: "circle" },
    tooltip: {
      formatter: (datum: any) => ({ name: "Leads", value: datum.count }),
    },
    lineStyle: { stroke: "#1677ff", lineWidth: 2 },
  };

  // ================= RECENT LEADS =================
  const recentLeads = [...leads]
    .sort((a, b) => {
      const dateA =
        typeof a.createdAt === "object" && "toDate" in a.createdAt
          ? (a.createdAt as any).toDate().getTime()
          : new Date(a.createdAt ?? 0).getTime();
      const dateB =
        typeof b.createdAt === "object" && "toDate" in b.createdAt
          ? (b.createdAt as any).toDate().getTime()
          : new Date(b.createdAt ?? 0).getTime();
      return dateB - dateA;
    })
    .slice(0, 5);

  // ================= GROWTH CALCULATIONS =================
  const calculateGrowth = (filterFn: (lead: Lead) => boolean) => {
    const now = new Date();
    const thisMonth = now.getMonth();
    const lastMonth = thisMonth === 0 ? 11 : thisMonth - 1;

    const thisMonthCount = leads.filter(
      (l) =>
        filterFn(l) &&
        new Date(
          typeof l.createdAt === "object" && "toDate" in l.createdAt
            ? (l.createdAt as any).toDate()
            : l.createdAt
        ).getMonth() === thisMonth
    ).length;

    const lastMonthCount = leads.filter(
      (l) =>
        filterFn(l) &&
        new Date(
          typeof l.createdAt === "object" && "toDate" in l.createdAt
            ? (l.createdAt as any).toDate()
            : l.createdAt
        ).getMonth() === lastMonth
    ).length;

    return lastMonthCount === 0
      ? 0
      : Math.round(((thisMonthCount - lastMonthCount) / lastMonthCount) * 100);
  };

  const totalGrowth = calculateGrowth(() => true);
  const activeGrowth = calculateGrowth((l) => l.status === "Contacted");
  const convertedGrowth = calculateGrowth((l) => l.status === "Converted");

  // ================= RENDER =================
  return (
    <>
      <h2>Dashboard Overview</h2>

      {/* KPI CARDS */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <UserOutlined style={{ fontSize: 24, color: "#1677ff" }} />
            <Statistic title="Total Leads" value={totalLeads} />
            <span style={{ color: "green" }}>
              <RiseOutlined /> {totalGrowth}%
            </span>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card>
            <UserOutlined style={{ fontSize: 24, color: "#faad14" }} />
            <Statistic title="Active Leads" value={contactedLeads} />
            <span style={{ color: "green" }}>
              <RiseOutlined /> {activeGrowth}%
            </span>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card>
            <CheckCircleOutlined style={{ fontSize: 24, color: "#52c41a" }} />
            <Statistic title="Converted Leads" value={convertedLeads} />
            <span style={{ color: "red" }}>
              <FallOutlined /> {convertedGrowth}%
            </span>
          </Card>
        </Col>
      </Row>

      {/* PROGRESS + RECENT LEADS */}
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} sm={24} md={12} lg={12} xl={10}>
          <Card title="Leads By Status">
            <p>New</p>
            <Progress percent={statusPercent(newLeads)} />
            <p>Contacted</p>
            <Progress percent={statusPercent(contactedLeads)} status="active" />
            <p>Converted</p>
            <Progress percent={statusPercent(convertedLeads)} status="success" />
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={14}>
          <Card title="Recent Leads">
            <Table
              pagination={false}
              scroll={{ x: "max-content" }}
              dataSource={recentLeads}
              columns={[
                { title: "Name", dataIndex: "name" },
                { title: "Email", dataIndex: "email" },
                {
                  title: "Status",
                  dataIndex: "status",
                  render: (status: string) => {
                    const color =
                      status === "Converted"
                        ? "green"
                        : status === "Contacted"
                        ? "orange"
                        : "blue";
                    return <Tag color={color}>{status}</Tag>;
                  },
                },
              ]}
            />
          </Card>
        </Col>
      </Row>

      {/* CHARTS */}
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} lg={12}>
          <Card title="Leads By Status">
            <Pie key={leads.length} {...pieConfig} />
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="Leads Growth Over Time">
            <Line key={lineData.length} {...lineConfig} />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DashboardPage;
