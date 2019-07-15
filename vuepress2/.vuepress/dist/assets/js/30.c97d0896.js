(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{172:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("InSpec profile to validate the secure configuration of JBOSS Wildfly EAP server, against "),n("a",{attrs:{href:"https://iase.disa.mil/stigs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DISA"),n("OutboundLink")],1),t._v("'s "),n("strong",[t._v("JBOSS Security Technical Implementation Guide (STIG)")]),t._v(".")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("Latest versions and installation options are available at the "),n("a",{attrs:{href:"http://inspec.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("InSpec"),n("OutboundLink")],1),t._v(" site.")]),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("You may choose to run the profile via a remote url, this has the advantage of always being up to date.\nThe disadvantage is you may wish to modify controls, which is only possible when downloaded.\nAlso, the remote profile is unintuitive for passing in attributes, which modify the default values of the profile.")]),t._v(" "),t._m(5),n("p",[t._v("Another option is to download the profile then run it, this allows you to edit specific instructions and view the profile code.")]),t._v(" "),t._m(6),t._m(7),t._v(" "),n("p",[t._v("You may alter the default settings of the profile by creating/modifying a yaml\nencoded 'attributes' file. The following yaml code details the currently\nsupported attributes, and can also be viewed as the attributes.yml file in this\nrepository.")]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),n("p",[t._v("This project is licensed under the terms of the "),n("a",{attrs:{href:"https://github.com/mitre/wildfly-stig-baseline/blob/master/LICENSE.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache 2.0 license"),n("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(14),t._v(" "),n("p",[t._v("© 2019 The MITRE Corporation.")]),t._v(" "),n("p",[t._v("Approved for Public Release; Distribution Unlimited. Case Number 18-3678.")]),t._v(" "),t._m(15),t._v(" "),n("p",[t._v("MITRE hereby grants express written permission to use, reproduce, distribute, modify, and otherwise leverage this software to the extent permitted by the licensed terms provided in the LICENSE.md file included with this project.")]),t._v(" "),t._m(16),t._v(" "),n("p",[t._v("This software was produced for the U. S. Government under Contract Number HHSM-500-2012-00008I, and is subject to Federal Acquisition Regulation Clause 52.227-14, Rights in Data-General.")]),t._v(" "),n("p",[t._v("No other use other than that granted to the U. S. Government, or to those acting on behalf of the U. S. Government under that Clause is authorized without the express written permission of The MITRE Corporation.")]),t._v(" "),n("p",[t._v("For further information, please contact The MITRE Corporation, Contracts Management Office, 7515 Colshire Drive, McLean, VA  22102-7539, (703) 983-6000.")]),t._v(" "),t._m(17),t._v(" "),n("p",[t._v("DISA STIGs are published by DISA IASE, see: https://iase.disa.mil/Pages/privacy_policy.aspx")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"wildfly-stig-baseline"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wildfly-stig-baseline","aria-hidden":"true"}},[this._v("#")]),this._v(" wildfly-stig-baseline")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting Started")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("It is intended and recommended that InSpec run this profile from a "),e("strong",[this._v('"runner"')]),this._v(" host (such as a DevOps orchestration server, an administrative management system, or a developer's workstation/laptop) against the target remotely over "),e("strong",[this._v("winrm")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("For the best security of the runner, always install on the runner the "),e("em",[this._v("latest version")]),this._v(" of InSpec and supporting Ruby language components.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"run-with-remote-profile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-with-remote-profile","aria-hidden":"true"}},[this._v("#")]),this._v(" Run with remote profile:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("inspec "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("exec")]),this._v(" https://gitlab.mitre.org/inspec/wildfly-stig-baseline/master/archive.tar.gz\n")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Clone Inspec Profile")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/mitre/wildfly-stig-baseline/archive/master.tar.gz\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Need to run the command ")]),t._v("\n$ /bin/sh /opt/wildfly/bin/jboss-cli.sh --connect \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Enter P to permanetely accept the certificate")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# How to run ")]),t._v("\n$ inspec "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),t._v(" wildfly-inspec --attrs wildfly-stig-baseline/attributes.yml\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#If running the profile before running the wildfly-hardening cookbook set the following in wildfly-stig-baseline/attributes.yml:")]),t._v("\nconnection: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--connect'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If running the profile after running the wildfy-hardening cookbook set the following in wildfly-stig-baseline/attributes.yml:")]),t._v("\nconnection: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-Djavax.net.ssl.trustStore=/opt/wildfly/standalone/configuration/a.jks --connect -u=test1 -p=test'")]),t._v("\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"attributes-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attributes-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Attributes (Configuration)")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#command to use when the wildfly cli is configured with a password")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#-u=<username to login in a>")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#-p=<password>")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#If running the profile before running the wildfly-hardening cookbook set the following in wildfly-inspec/attributes.yml:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("connection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--connect'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#If running the profile after running the wildfy-hardening cookbook set this in wildfly-inspec/attributes.yml:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("connection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-Djavax.net.ssl.trustStore=/opt/wildfly/standalone/configuration/a.jks --connect -u=test1 -p=test'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("high_availability")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'false'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ldap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'false'")]),t._v("\n\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#node.default['wildfly-hardening']['c'] = '--connect'")]),t._v("\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"authors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authors","aria-hidden":"true"}},[this._v("#")]),this._v(" Authors")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Alicia Sturtevant")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"special-thanks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#special-thanks","aria-hidden":"true"}},[this._v("#")]),this._v(" Special Thanks")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("The MITRE InSpec Team")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"notice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notice","aria-hidden":"true"}},[this._v("#")]),this._v(" NOTICE")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"notice-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notice-2","aria-hidden":"true"}},[this._v("#")]),this._v(" NOTICE")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"notice-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notice-3","aria-hidden":"true"}},[this._v("#")]),this._v(" NOTICE")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"notice-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notice-4","aria-hidden":"true"}},[this._v("#")]),this._v(" NOTICE")])}],!1,null,null,null);e.default=a.exports}}]);