(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{195:function(e,t,r){"use strict";r.r(t);var s=r(0),i=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("InSpec profile to validate the secure configuration of AWS RDS PostgreSQL 9.x Database, against "),r("a",{attrs:{href:"https://iase.disa.mil/stigs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("DISA"),r("OutboundLink")],1),e._v("'s "),r("strong",[e._v("PostgresSQL 9.x Security Technical Implementation Guide (STIG) Version 1, Release 1")]),e._v(".")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("Latest versions and installation options are available at the "),r("a",{attrs:{href:"http://inspec.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("InSpec"),r("OutboundLink")],1),e._v(" site.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),r("p",[e._v("Runs this profile over winrm to the host at IP address hostip as a privileged user account (i.e., an account with administrative privileges), reporting results to both the command line interface (cli) and to a machine-readable JSON file.")]),e._v(" "),r("p",[e._v("The following is an example of using this command.")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),r("p",[e._v("The JSON results output file can be loaded into "),r("strong",[r("a",{attrs:{href:"https://mitre.github.io/heimdall-lite/",target:"_blank",rel:"noopener noreferrer"}},[e._v("heimdall-lite"),r("OutboundLink")],1)]),e._v(" for a user-interactive, graphical view of the InSpec results.")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),r("p",[e._v("To report a bug or feature request, please open an "),r("a",{attrs:{href:"https://github.com/mitre/Aws-rds-PostgresSQL-9.x_stig-baseline/issues/new",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue"),r("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(10),e._v(" "),r("p",[e._v("To contribute, please review the "),r("a",{attrs:{href:"https://github.com/mitre/docs-mitre-inspec/blob/master/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("contribution guidelines"),r("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),r("ul",[r("li",[e._v("This project is licensed under the terms of the "),r("a",{attrs:{href:"https://github.com/mitre/Aws-rds-PostgresSQL-9.x_stig-baseline/blob/master/LICENSE.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache 2.0 license"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),e._m(16),e._v(" "),r("p",[e._v("© 2019 The MITRE Corporation.")]),e._v(" "),r("p",[e._v("Approved for Public Release; Distribution Unlimited. Case Number 18-3678.")]),e._v(" "),e._m(17),e._v(" "),r("p",[e._v("MITRE hereby grants express written permission to use, reproduce, distribute, modify, and otherwise leverage this software to the extent permitted by the licensed terms provided in the LICENSE.md file included with this project.")]),e._v(" "),e._m(18),e._v(" "),r("p",[e._v("This software was produced for the U. S. Government under Contract Number HHSM-500-2012-00008I, and is subject to Federal Acquisition Regulation Clause 52.227-14, Rights in Data-General.")]),e._v(" "),r("p",[e._v("No other use other than that granted to the U. S. Government, or to those acting on behalf of the U. S. Government under that Clause is authorized without the express written permission of The MITRE Corporation.")]),e._v(" "),r("p",[e._v("For further information, please contact The MITRE Corporation, Contracts Management Office, 7515 Colshire Drive, McLean, VA  22102-7539, (703) 983-6000.")]),e._v(" "),e._m(19),e._v(" "),r("p",[e._v("DISA STIGs are published by DISA IASE, see: https://iase.disa.mil/Pages/privacy_policy.aspx")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"aws-rds-postgressql-9-x-stig-baseline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws-rds-postgressql-9-x-stig-baseline","aria-hidden":"true"}},[this._v("#")]),this._v(" Aws-rds-PostgresSQL-9.x_stig-baseline")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"getting-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting Started")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("It is intended and recommended that InSpec run this profile from a "),t("strong",[this._v('"runner"')]),this._v(" host (such as a DevOps orchestration server, an administrative management system, or a developer's workstation/laptop) against the target remotely over "),t("strong",[this._v("winrm")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("For the best security of the runner, always install on the runner the "),t("em",[this._v("latest version")]),this._v(" of InSpec and supporting Ruby language components.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"running-this-profile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-this-profile","aria-hidden":"true"}},[this._v("#")]),this._v(" Running This Profile")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("inspec exec https://github.com/mitre/Aws-rds-PostgresSQL-9.x_stig-baseline/archive/master.tar.gz -t winrm://<hostip> --user '<admin-account>' --password=<password> --reporter cli json:<filename>.json\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("inspec exec https://github.com/mitre/Aws-rds-PostgresSQL-9.x_stig-baseline/archive/master.tar.gz -t winrm://$winhostip --user 'Administrator' --password=Pa55w0rd --reporter cli json:aws-rds-postgresql-stig-baseline-results.json\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"viewing-the-json-results"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#viewing-the-json-results","aria-hidden":"true"}},[this._v("#")]),this._v(" Viewing the JSON Results")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The JSON InSpec results file may also be loaded into a "),t("strong",[this._v("full heimdall server")]),this._v(", allowing for additional functionality such as to store and compare multiple profile runs.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"contributing-and-getting-help"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contributing-and-getting-help","aria-hidden":"true"}},[this._v("#")]),this._v(" Contributing and Getting Help")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For other help, please send a message to "),t("a",{attrs:{href:"mailto:inspec@mitre.org"}},[this._v("inspec@mitre.org")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"authors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authors","aria-hidden":"true"}},[this._v("#")]),this._v(" Authors")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Alicia Sturtevant")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"special-thanks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#special-thanks","aria-hidden":"true"}},[this._v("#")]),this._v(" Special Thanks")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Aaron Lippold")]),this._v(" "),t("li",[this._v("The MITRE InSpec Team")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"license"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"notice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notice","aria-hidden":"true"}},[this._v("#")]),this._v(" NOTICE")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"notice-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notice-2","aria-hidden":"true"}},[this._v("#")]),this._v(" NOTICE")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"notice-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notice-3","aria-hidden":"true"}},[this._v("#")]),this._v(" NOTICE")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"notice-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notice-4","aria-hidden":"true"}},[this._v("#")]),this._v(" NOTICE")])}],!1,null,null,null);t.default=i.exports}}]);