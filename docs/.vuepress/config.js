module.exports = {
  title: "MITRE Inspec Compliance Framework",
  description: "A framework containing baselines and tools from MITRE.",
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Applications", link: "/applications/" },
      { text: "Baselines", link: "/baselines/" },
      {
        text: "Community",
        items: [
          { text: "News", link: "/community/news/" },
          { text: "Videos", link: "/community/videos/" }
        ]
      },
      { text: "GitHub", link: "https://github.com/mitre" }
    ],
    sidebar: {
      "/applications/": [
        "",
        "nginx-baseline",
        "red-hat-enterprise-linux-6-stig-baseline",
        "oracle-database-12c-stig-baseline",
        "rsa-archer-6-security-configuration-guide-baseline",
        "microsoft-sql-server-2014-database-stig-baseline",
        "cis_apache_tomcat_benchmark_8",
        "cis-aws-foundations-baseline",
        "stig-canonical-ubuntu-16.04-lts-baseline",
        "microsoft-sql-server-2014-instance-stig-baseline",
        "microsoft-iis-8.5-server-stig-baseline",
        "microsoft-iis-8.5-site-stig-baseline",
        "Oracle-MySQL-Enterprise-Edition-5.7-cis-baseline",
        "aws-rds-microsoft-sql-server-2014-stig-baseline",
        "cis-docker-ce-baseline",
        "wildfly-stig-baseline",
        "oracle-java-runtime-environment-8-unix-stig-baseline",
        "oracle-java-runtime-environment-7-unix-stig-baseline",
        "aws-rds-postgres-9-stig-baseline",
        "microsoft-windows-2012r2-memberserver-stig-baseline",
        "mongodb-enterprise-advanced-stig-baseline",
        "cis_apache_tomcat_benchmark_7",
        "cis-aws-rds-mysql-server-enterprise-v5.7-baseline",
        "stig-microsoft-windows-server-2016-v1r4-baseline",
        "aws-s3-baseline",
        "cis-kubernetes-benchmark",
        "cis-aws-rds-infrastructure-baseline"
      ]
    },
    search: false
  }
};
