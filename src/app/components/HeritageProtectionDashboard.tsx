import { motion } from "motion/react";
import { Shield, AlertTriangle, TrendingUp, Activity } from "lucide-react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function HeritageProtectionDashboard() {
  // Mock data for charts
  const structuralHealthData = [
    { month: "Jan", health: 85 },
    { month: "Feb", health: 87 },
    { month: "Mar", health: 86 },
    { month: "Apr", health: 88 },
    { month: "May", health: 89 },
    { month: "Jun", health: 90 },
  ];

  const visitorsData = [
    { day: "Mon", visitors: 450 },
    { day: "Tue", visitors: 520 },
    { day: "Wed", visitors: 480 },
    { day: "Thu", visitors: 600 },
    { day: "Fri", visitors: 750 },
    { day: "Sat", visitors: 820 },
    { day: "Sun", visitors: 780 },
  ];

  const buildingStatusData = [
    { name: "Excellent", value: 65, color: "#10b981" },
    { name: "Good", value: 25, color: "#f59e0b" },
    { name: "Needs Attention", value: 10, color: "#ef4444" },
  ];

  const alerts = [
    {
      level: "warning",
      building: "Al-Qazzazin Market",
      issue: "Humidity levels elevated",
      action: "Climate control activated",
    },
    {
      level: "info",
      building: "Khan Al-Zeit",
      issue: "Routine inspection scheduled",
      action: "Team notified",
    },
    {
      level: "success",
      building: "Old Mosque",
      issue: "Restoration completed",
      action: "Reopening next week",
    },
  ];

  const stats = [
    {
      icon: Shield,
      label: "Protected Buildings",
      value: "127",
      change: "+3 this month",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Activity,
      label: "Active Sensors",
      value: "342",
      change: "100% operational",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: TrendingUp,
      label: "Health Score",
      value: "89%",
      change: "+2% from last month",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: AlertTriangle,
      label: "Active Alerts",
      value: "3",
      change: "2 resolved today",
      color: "from-red-500 to-rose-600",
    },
  ];

  return (
    <section
      id="dashboard"
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-br from-green-500 to-emerald-700 p-4 rounded-2xl">
              <Shield className="text-white" size={48} />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Heritage Protection{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Dashboard
            </span>
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Real-time monitoring and AI-powered preservation of historical structures
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-stone-800/50 border border-amber-900/30 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-xl w-fit mb-4`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-stone-400 text-sm mb-2">{stat.label}</div>
              <div className="text-green-400 text-xs">{stat.change}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Structural Health Over Time */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-stone-800/50 border border-amber-900/30 rounded-2xl p-6 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-xl">
                Structural Health Trend
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-stone-400 text-sm">Live Data</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={structuralHealthData}>
                <defs>
                  <linearGradient id="healthGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
                <XAxis dataKey="month" stroke="#a8a29e" />
                <YAxis stroke="#a8a29e" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1c1917",
                    border: "1px solid #78350f",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="health"
                  stroke="#10b981"
                  fillOpacity={1}
                  fill="url(#healthGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Building Status Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-stone-800/50 border border-amber-900/30 rounded-2xl p-6 backdrop-blur-sm"
          >
            <h3 className="text-white font-bold text-xl mb-6">
              Building Status Distribution
            </h3>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={buildingStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {buildingStatusData.map((entry) => (
                      <Cell key={`pie-cell-${entry.name}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1c1917",
                      border: "1px solid #78350f",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Visitor Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-stone-800/50 border border-amber-900/30 rounded-2xl p-6 backdrop-blur-sm"
          >
            <h3 className="text-white font-bold text-xl mb-6">
              Weekly Visitor Analytics
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={visitorsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
                <XAxis dataKey="day" stroke="#a8a29e" />
                <YAxis stroke="#a8a29e" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1c1917",
                    border: "1px solid #78350f",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="visitors" fill="#f59e0b" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Alerts Panel */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-stone-800/50 border border-amber-900/30 rounded-2xl p-6 backdrop-blur-sm"
          >
            <h3 className="text-white font-bold text-xl mb-6">Recent Alerts</h3>
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`border-l-4 ${
                    alert.level === "warning"
                      ? "border-yellow-500 bg-yellow-500/10"
                      : alert.level === "success"
                      ? "border-green-500 bg-green-500/10"
                      : "border-blue-500 bg-blue-500/10"
                  } p-4 rounded-r-lg`}
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle
                      className={
                        alert.level === "warning"
                          ? "text-yellow-500"
                          : alert.level === "success"
                          ? "text-green-500"
                          : "text-blue-500"
                      }
                      size={20}
                    />
                    <div className="flex-1">
                      <div className="text-white font-bold text-sm mb-1">
                        {alert.building}
                      </div>
                      <div className="text-stone-400 text-xs mb-2">
                        {alert.issue}
                      </div>
                      <div className="text-stone-500 text-xs">
                        ✓ {alert.action}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technology Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "IoT Sensors",
              description:
                "Temperature, humidity, structural stress, and vibration monitoring",
              icon: "🌡️",
            },
            {
              title: "AI Analysis",
              description:
                "Predictive maintenance using machine learning algorithms",
              icon: "🤖",
            },
            {
              title: "Real-time Alerts",
              description:
                "Instant notifications for any anomalies or required interventions",
              icon: "🚨",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-stone-800/50 to-stone-900/50 border border-green-900/30 rounded-2xl p-6 text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-white font-bold text-lg mb-2">
                {feature.title}
              </h4>
              <p className="text-stone-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}