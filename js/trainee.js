angular.module('trainee', ['controllers', 'services']);

angular.module('services', [])
  .factory('Questions', ['$http', function ($http) {
    return {
      name: 'Question Service',
      get: function (callback) {
        // $http.get('http://example.com').success(function (data) {
        //   callback(data);
        // });
        callback(questions);
      }
    };
  }]);

angular.module('controllers', [])
  .controller('TraineeCtrl', ['$scope', 'Questions', function ($scope, Questions) {
    Questions.get(function (questions) {
      $scope.questions = questions;
    });
  }]);

var questions = [
  {
    "id": 0,
    "question": "1. You are attempting to add new keywords to a SharePoint and receive a message that states The Site Does Not Contain A Default Keywords Store. How should you correct this issue?",
    "a": "A. Add an enterprise keywords site column to the site’s content types.",
    "b": "B. In Central Administration, add an MMS application to the SharePoint farm.",
    "c": "C. Edit the MMS Connection and then select This Service Application Is The Default Storage Location For Keywords.",
    "d": "D. Activate the managed keyword service application in Central Administration."
  },
  {
    "id": 0,
    "question": "2. You want to define a new information policy feature. The legal requirement for the document type requires that you produce and retain physical copies of each document. You want to use a policy feature that will be supported in the next version of SharePoint.Which of the following policy feature types should you choose?",
    "a": "A. Retention",
    "b": "B. Bar codes",
    "c": "C. Labels",
    "d": "D. Auditing"
  },
  {
    "id": 0,
    "question": "3. Within the managed metadata service, you want to designate a set of terms specifically for SharePoint navigation. What selection should you make within the Intended Use tab to accomplish this action?",
    "a": "A. Use This Term Set For Managed Navigation",
    "b": "B. Make Term Set Unavailable For Tagging",
    "c": "C. Enable Team Site Navigation",
    "d": "D. Use This Term Set For Site Navigation"
  },
  {
    "id": 0,
    "question": "1. You are attempting to add new keywords to a SharePoint and receive a message that states The Site Does Not Contain A Default Keywords Store. How should you correct this issue?",
    "a": "A. Add an enterprise keywords site column to the site’s content types.",
    "b": "B. In Central Administration, add an MMS application to the SharePoint farm.",
    "c": "C. Edit the MMS Connection and then select This Service Application Is The Default Storage Location For Keywords.",
    "d": "D. Activate the managed keyword service application in Central Administration."
  },
  {
    "id": 0,
    "question": "2. You want to define a new information policy feature. The legal requirement for the document type requires that you produce and retain physical copies of each document. You want to use a policy feature that will be supported in the next version of SharePoint.Which of the following policy feature types should you choose?",
    "a": "A. Retention",
    "b": "B. Bar codes",
    "c": "C. Labels",
    "d": "D. Auditing"
  },
  {
    "id": 0,
    "question": "3. Within the managed metadata service, you want to designate a set of terms specifically for SharePoint navigation. What selection should you make within the Intended Use tab to accomplish this action?",
    "a": "A. Use This Term Set For Managed Navigation",
    "b": "B. Make Term Set Unavailable For Tagging",
    "c": "C. Enable Team Site Navigation",
    "d": "D. Use This Term Set For Site Navigation"
  },
  {
    "id": 0,
    "question": "1. You want to build a navigational structure in which each site collection can have its own vanity URL. Which site collection designation should be used for the web application?",
    "a": "A. Fully qualified domain name (FQDN) site collections",
    "b": "B. Host named site collections",
    "c": "C. Domain named site collections",
    "d": "D. Path-based site collections"
  },
  {
    "id": 0,
    "question": "2. Which of the following SQL high availability (HA) solutions require configuration in SharePoint content databases?",
    "a": "A. SQL log shipping",
    "b": "B. SQL mirroring",
    "c": "C. SQL high availability groups",
    "d": "D. SQL clustering"
  },
  {
    "id": 0,
    "question": "3. Which of the following statements are true concerning web applications and application pools in a SharePoint environment?",
    "a": "A. There is a threshold limit of 20 web applications per SharePoint farm.",
    "b": "B. There is a supported limit of 20 web applications per SharePoint farm.",
    "c": "C. There is a supported limit of 10 application pools per web server in a SharePoint farm.",
    "d": "D. There is a threshold limit of 10 application pools per web server in a SharePoint "
  },
  {
    "id": 0,
    "question": "1. You want to build a navigational structure in which each site collection can have its own vanity URL. Which site collection designation should be used for the web application?",
    "a": "A. Fully qualified domain name (FQDN) site collections",
    "b": "B. Host named site collections",
    "c": "C. Domain named site collections",
    "d": "D. Path-based site collections"
  },
  {
    "id": 0,
    "question": "2. Which of the following SQL high availability (HA) solutions require configuration in SharePoint content databases?",
    "a": "A. SQL log shipping",
    "b": "B. SQL mirroring",
    "c": "C. SQL high availability groups",
    "d": "D. SQL clustering"
  },
  {
    "id": 0,
    "question": "3. Which of the following statements are true concerning web applications and application pools in a SharePoint environment?",
    "a": "A. There is a threshold limit of 20 web applications per SharePoint farm.",
    "b": "B. There is a supported limit of 20 web applications per SharePoint farm.",
    "c": "C. There is a supported limit of 10 application pools per web server in a SharePoint farm.",
    "d": "D. There is a threshold limit of 10 application pools per web server in a SharePoint "
  },
  {
    "id": 0,
    "question": "1. You want to utilize NAS storage within your SharePoint farm. Which of the following components are supported in this configuration?",
    "a": "A. Content databases",
    "b": "B. RBS",
    "c": "C. Configuration databases",
    "d": "D. Service application databases"
  },
  {
    "id": 0,
    "question": "2. You want to build a server farm specifically intended to handle incoming request management processing duties. Which deployment mode should you choose?",
    "a": "A. Affinity mode",
    "b": "B. Integrated mode",
    "c": "C. Dedicated mode",
    "d": "D. Throttling mode"
  },
  {
    "id": 0,
    "question": "3. The smallest fault-tolerant SharePoint 2013 farm should include how many servers?",
    "a": "A. 3 (one in each tier)",
    "b": "B. 4",
    "c": "C. 5",
    "d": "D. 6"
  },
  {
    "id": 0,
    "question": "1. You want to utilize NAS storage within your SharePoint farm. Which of the following components are supported in this configuration?",
    "a": "A. Content databases",
    "b": "B. RBS",
    "c": "C. Configuration databases",
    "d": "D. Service application databases"
  },
  {
    "id": 0,
    "question": "2. You want to build a server farm specifically intended to handle incoming request management processing duties. Which deployment mode should you choose?",
    "a": "A. Affinity mode",
    "b": "B. Integrated mode",
    "c": "C. Dedicated mode",
    "d": "D. Throttling mode"
  },
  {
    "id": 0,
    "question": "3. The smallest fault-tolerant SharePoint 2013 farm should include how many servers?",
    "a": "A. 3 (one in each tier)",
    "b": "B. 4",
    "c": "C. 5",
    "d": "D. 6"
  },
  {
    "id": 0,
    "question": "1. Which of the following Office 365 subscriptions include SharePoint Online as a component?",
    "a": "A. Office 365 Home Premium",
    "b": "B. Office 365 Small Business Premium",
    "c": "C. Office 365 ProPlus",
    "d": "D. Office 365 Enterprise"
  },
  {
    "id": 0,
    "question": "2. Which of the following services are not included in SharePoint Online?",
    "a": "A. Word Automation Services",
    "b": "B. Excel Calculation Services",
    "c": "C. PerformancePoint Services",
    "d": "D. Visio Graphics Services"
  },
  {
    "id": 0,
    "question": "3. Your Office 365 users complain that they cannot share the contents of their site collections with outside partners. Which section of the SharePoint admin center is appropriate for correcting this issue?",
    "a": "A. Settings",
    "b": "B. Search",
    "c": "C. Apps",
    "d": "D. Site collections"
  },
  {
    "id": 0,
    "question": "1. Which of the following Office 365 subscriptions include SharePoint Online as a component?",
    "a": "A. Office 365 Home Premium",
    "b": "B. Office 365 Small Business Premium",
    "c": "C. Office 365 ProPlus",
    "d": "D. Office 365 Enterprise"
  },
  {
    "id": 0,
    "question": "2. Which of the following services are not included in SharePoint Online?",
    "a": "A. Word Automation Services",
    "b": "B. Excel Calculation Services",
    "c": "C. PerformancePoint Services",
    "d": "D. Visio Graphics Services"
  },
  {
    "id": 0,
    "question": "3. Your Office 365 users complain that they cannot share the contents of their site collections with outside partners. Which section of the SharePoint admin center is appropriate for correcting this issue?",
    "a": "A. Settings",
    "b": "B. Search",
    "c": "C. Apps",
    "d": "D. Site collections"
  },
  {
    "id": 0,
    "question": "1. Which of the following are considered integrated Windows authentication types?",
    "a": "A. Basic authentication",
    "b": "B. Forms authentication",
    "c": "C. Kerberos authentication",
    "d": "D. NTLM authentication"
  },
  {
    "id": 0,
    "question": "2. Which of the following authentication types are not claims-based?",
    "a": "A. Windows classic authentication",
    "b": "B. NTLM authentication",
    "c": "C. Site collection authentication",
    "d": "D. Forms authentication"
  },
  {
    "id": 0,
    "question": "3. Which of the following are supported configurations for S2S?",
    "a": "A. SharePoint 2013 to Exchange 2013",
    "b": "B. SharePoint 2013 to Lync 2013",
    "c": "C. SharePoint 2013 to SQL Server 2012",
    "d": "D. SharePoint 2013 to SharePoint 2013"
  },
  {
    "id": 0,
    "question": "4. At which of the following levels can anonymous authentication be configured in SharePoint?",
    "a": "A. Zone",
    "b": "B. Web application",
    "c": "C. Site collection",
    "d": "D. Site"
  },
  {
    "id": 0,
    "question": "1. Which of the following are considered integrated Windows authentication types?",
    "a": "A. Basic authentication",
    "b": "B. Forms authentication",
    "c": "C. Kerberos authentication",
    "d": "D. NTLM authentication"
  },
  {
    "id": 0,
    "question": "2. Which of the following authentication types are not claims-based?",
    "a": "A. Windows classic authentication",
    "b": "B. NTLM authentication",
    "c": "C. Site collection authentication",
    "d": "D. Forms authentication"
  },
  {
    "id": 0,
    "question": "3. Which of the following are supported configurations for S2S?",
    "a": "A. SharePoint 2013 to Exchange 2013",
    "b": "B. SharePoint 2013 to Lync 2013",
    "c": "C. SharePoint 2013 to SQL Server 2012",
    "d": "D. SharePoint 2013 to SharePoint 2013"
  },
  {
    "id": 0,
    "question": "4. At which of the following levels can anonymous authentication be configured in SharePoint?",
    "a": "A. Zone",
    "b": "B. Web application",
    "c": "C. Site collection",
    "d": "D. Site"
  },
  {
    "id": 0,
    "question": "1. Which of the following default groups is cannot be automatically set up during the provisioning of new SharePoint sites?",
    "a": "A. Visitors",
    "b": "B. Authors",
    "c": "C. Members",
    "d": "D. Owners"
  },
  {
    "id": 0,
    "question": "2. Which of the following Windows PowerShell cmdlets is used to configure People Picker?",
    "a": "A. Set-PeoplePicker",
    "b": "B. Set-PickerWebControl",
    "c": "C. Get-PeoplePicker",
    "d": "D. None of the above"
  },
  {
    "id": 0,
    "question": "3. At which levels can you choose to explicitly allow anonymous access (authorization)?",
    "a": "A. Web application",
    "b": "B. Web site",
    "c": "C. Lists and libraries",
    "d": "D. Individual item"
  },
  {
    "id": 0,
    "question": "4. Which of the following web application policies is responsible for setting up individual permission levels at the web app level?",
    "a": "A. Permission Policy",
    "b": "B. User Policy",
    "c": "C. Anonymous Policy",
    "d": "D. Inheritance Policy"
  },
  {
    "id": 0,
    "question": "1. Which of the following default groups is cannot be automatically set up during the provisioning of new SharePoint sites?",
    "a": "A. Visitors",
    "b": "B. Authors",
    "c": "C. Members",
    "d": "D. Owners"
  },
  {
    "id": 0,
    "question": "2. Which of the following Windows PowerShell cmdlets is used to configure People Picker?",
    "a": "A. Set-PeoplePicker",
    "b": "B. Set-PickerWebControl",
    "c": "C. Get-PeoplePicker",
    "d": "D. None of the above"
  },
  {
    "id": 0,
    "question": "3. At which levels can you choose to explicitly allow anonymous access (authorization)?",
    "a": "A. Web application",
    "b": "B. Web site",
    "c": "C. Lists and libraries",
    "d": "D. Individual item"
  },
  {
    "id": 0,
    "question": "4. Which of the following web application policies is responsible for setting up individual permission levels at the web app level?",
    "a": "A. Permission Policy",
    "b": "B. User Policy",
    "c": "C. Anonymous Policy",
    "d": "D. Inheritance Policy"
  },
  {
    "id": 0,
    "question": "1. Which of the following features can be activated to disable anonymous access to the _layouts folder?",
    "a": "A. Limited-Access User Permission Lockdown mode",
    "b": "B. Forms Table Lockdown mode",
    "c": "C. Layouts and Web Services Lockdown mode",
    "d": "D. None of the above"
  },
  {
    "id": 0,
    "question": "2. In an Internet-facing SharePoint farm, which of the following SharePoint Server tiers does not require protection by a firewall?",
    "a": "A. Web tier",
    "b": "B. App tier",
    "c": "C. Data tier",
    "d": "D. None of the above"
  },
  {
    "id": 0,
    "question": "3. When can a document be scanned by a SharePoint-integrated antivirus solution?",
    "a": "A. On upload",
    "b": "B. At the end of a workflow",
    "c": "C. During a workflow",
    "d": "D. On download"
  },
  {
    "id": 0,
    "question": "4. Which of the following certificate types is part of establishing a trust between SharePoint farms?",
    "a": "A. An STS certificate generated by the publishing farm",
    "b": "B. A root certificate generated from the consuming farm",
    "c": "C. An STS certificate generated from the consuming farm",
    "d": "D. A root certificate generated by the publishing farm"
  },
  {
    "id": 0,
    "question": "1. Which of the following features can be activated to disable anonymous access to the _layouts folder?",
    "a": "A. Limited-Access User Permission Lockdown mode",
    "b": "B. Forms Table Lockdown mode",
    "c": "C. Layouts and Web Services Lockdown mode",
    "d": "D. None of the above"
  },
  {
    "id": 0,
    "question": "2. In an Internet-facing SharePoint farm, which of the following SharePoint Server tiers does not require protection by a firewall?",
    "a": "A. Web tier",
    "b": "B. App tier",
    "c": "C. Data tier",
    "d": "D. None of the above"
  },
  {
    "id": 0,
    "question": "3. When can a document be scanned by a SharePoint-integrated antivirus solution?",
    "a": "A. On upload",
    "b": "B. At the end of a workflow",
    "c": "C. During a workflow",
    "d": "D. On download"
  },
  {
    "id": 0,
    "question": "4. Which of the following certificate types is part of establishing a trust between SharePoint farms?",
    "a": "A. An STS certificate generated by the publishing farm",
    "b": "B. A root certificate generated from the consuming farm",
    "c": "C. An STS certificate generated from the consuming farm",
    "d": "D. A root certificate generated by the publishing farm"
  },
  {
    "id": 0,
    "question": "1. Which of the following options is available for using an RMS server in a SharePoint farm?",
    "a": "A. Do Not Use IRM On This Server",
    "b": "B. Use The Default RMS Server Specified In Active Directory",
    "c": "C. Specify An Existing RMS Server",
    "d": "D. All of the above"
  },
  {
    "id": 0,
    "question": "2. In a growing SharePoint farm, at what levels might you choose to delegate administration?",
    "a": "A. Web application",
    "b": "B. Farm",
    "c": "C. Service application",
    "d": "D. Zone"
  },
  {
    "id": 0,
    "question": "3. Which of the following statements are true concerning managed accounts?",
    "a": "A. A system-generated password can be automatically provisioned",
    "b": "B. An administrator can enter a new password",
    "c": "C. An existing password can be used",
    "d": "D. All of the above"
  },
  {
    "id": 0,
    "question": "4. Which of the following Web Part security settings has to do with the use of JavaScript in Web Parts?",
    "a": "A. Web Part Connections",
    "b": "B. Online Web Part Gallery",
    "c": "C. Scriptable Web Parts",
    "d": "D. None of the above"
  },
  {
    "id": 0,
    "question": "1. Which of the following options is available for using an RMS server in a SharePoint farm?",
    "a": "A. Do Not Use IRM On This Server",
    "b": "B. Use The Default RMS Server Specified In Active Directory",
    "c": "C. Specify An Existing RMS Server",
    "d": "D. All of the above"
  },
  {
    "id": 0,
    "question": "2. In a growing SharePoint farm, at what levels might you choose to delegate administration?",
    "a": "A. Web application",
    "b": "B. Farm",
    "c": "C. Service application",
    "d": "D. Zone"
  },
  {
    "id": 0,
    "question": "3. Which of the following statements are true concerning managed accounts?",
    "a": "A. A system-generated password can be automatically provisioned",
    "b": "B. An administrator can enter a new password",
    "c": "C. An existing password can be used",
    "d": "D. All of the above"
  },
  {
    "id": 0,
    "question": "4. Which of the following Web Part security settings has to do with the use of JavaScript in Web Parts?",
    "a": "A. Web Part Connections",
    "b": "B. Online Web Part Gallery",
    "c": "C. Scriptable Web Parts",
    "d": "D. None of the above"
  },
  {
    "id": 0,
    "question": "1. Which of the following commands or cmdlets can used to install the Application Server Role and Web Server Role on a new server in preparation for a SharePoint installation?",
    "a": "A. Get-SPPreReqInstaller",
    "b": "B. Prerequisiteinstaller.exe",
    "c": "C. Get-ServerRole",
    "d": "D. Add-WindowsFeature"
  },
  {
    "id": 0,
    "question": "2. What is the proper value in SQL for the max degree of parallelism setting to support a SharePoint installation?",
    "a": "A. 0",
    "b": "B. 1",
    "c": "C. Equal to the number of processor cores on the SQL Server",
    "d": "D. Total amount of RAM/number of processor cores on the SQL Server"
  },
  {
    "id": 0,
    "question": "3. Which of the following commands can be run to install the Spanish version of the SharePoint language pack?",
    "a": "A. Sharepointupdate.exe",
    "b": "B. Prerequisiteinstaller.exe",
    "c": "C. SPLanguagePack.exe",
    "d": "D. Sharepointlanguagepack.exe"
  },
  {
    "id": 0,
    "question": "4. Which of the following tools are used by an Active Directory administrator to create the container for the SCP?",
    "a": "A. Active Directory Users and Computers",
    "b": "B. ADSIEdit.exe",
    "c": "C. Get-ADContainer",
    "d": "D. Set-ADContainer"
  },
  {
    "id": 0,
    "question": "1. Which of the following commands or cmdlets can used to install the Application Server Role and Web Server Role on a new server in preparation for a SharePoint installation?",
    "a": "A. Get-SPPreReqInstaller",
    "b": "B. Prerequisiteinstaller.exe",
    "c": "C. Get-ServerRole",
    "d": "D. Add-WindowsFeature"
  },
  {
    "id": 0,
    "question": "2. What is the proper value in SQL for the max degree of parallelism setting to support a SharePoint installation?",
    "a": "A. 0",
    "b": "B. 1",
    "c": "C. Equal to the number of processor cores on the SQL Server",
    "d": "D. Total amount of RAM/number of processor cores on the SQL Server"
  },
  {
    "id": 0,
    "question": "3. Which of the following commands can be run to install the Spanish version of the SharePoint language pack?",
    "a": "A. Sharepointupdate.exe",
    "b": "B. Prerequisiteinstaller.exe",
    "c": "C. SPLanguagePack.exe",
    "d": "D. Sharepointlanguagepack.exe"
  },
  {
    "id": 0,
    "question": "4. Which of the following tools are used by an Active Directory administrator to create the container for the SCP?",
    "a": "A. Active Directory Users and Computers",
    "b": "B. ADSIEdit.exe",
    "c": "C. Get-ADContainer",
    "d": "D. Set-ADContainer"
  },
  {
    "id": 0,
    "question": "1. Which of the following e-mail scenarios support the prevention of spam filtering and virus prevention through incoming e-mail connectivity to a list or library in SharePoint?",
    "a": "A. Basic scenario",
    "b": "B. List scenario",
    "c": "C. Library scenario",
    "d": "D. Advanced scenario"
  },
  {
    "id": 0,
    "question": "2. Which of the following cmdlets is used to create a new proxy group for use with service applications?",
    "a": "A. Set-SPServiceApplicationProxyGroup",
    "b": "B. Get-SPServiceApplicationProxyGroup",
    "c": "C. Get-SPServiceApplicationProxy",
    "d": "D. Add-SPServiceApplicationProxyGroupMember"
  },
  {
    "id": 0,
    "question": "3. Which of the following is the correct cmdlet to configure SPD settings within a web app?",
    "a": "A. Set-SharePointDesigner",
    "b": "B. Set-SPDesigner",
    "c": "C. Set-SharePointDesignerSettings",
    "d": "D. Set-SPDesignerSettings"
  },
  {
    "id": 0,
    "question": "4. Which of the following cmdlets is used to bind an Office Web Apps installation with a SharePoint farm?",
    "a": "A. Set-NewWOPIBinding",
    "b": "B. Set-NewSPBinding",
    "c": "C. New-SPWOPIBinding",
    "d": "D. New-WOPISPBinding"
  },
  {
    "id": 0,
    "question": "1. Which of the following e-mail scenarios support the prevention of spam filtering and virus prevention through incoming e-mail connectivity to a list or library in SharePoint?",
    "a": "A. Basic scenario",
    "b": "B. List scenario",
    "c": "C. Library scenario",
    "d": "D. Advanced scenario"
  },
  {
    "id": 0,
    "question": "2. Which of the following cmdlets is used to create a new proxy group for use with service applications?",
    "a": "A. Set-SPServiceApplicationProxyGroup",
    "b": "B. Get-SPServiceApplicationProxyGroup",
    "c": "C. Get-SPServiceApplicationProxy",
    "d": "D. Add-SPServiceApplicationProxyGroupMember"
  },
  {
    "id": 0,
    "question": "3. Which of the following is the correct cmdlet to configure SPD settings within a web app?",
    "a": "A. Set-SharePointDesigner",
    "b": "B. Set-SPDesigner",
    "c": "C. Set-SharePointDesignerSettings",
    "d": "D. Set-SPDesignerSettings"
  },
  {
    "id": 0,
    "question": "4. Which of the following cmdlets is used to bind an Office Web Apps installation with a SharePoint farm?",
    "a": "A. Set-NewWOPIBinding",
    "b": "B. Set-NewSPBinding",
    "c": "C. New-SPWOPIBinding",
    "d": "D. New-WOPISPBinding"
  },
  {
    "id": 0,
    "question": "1. You want to modify the search topology of your farm. The body of content is quite large and has generated a large index. Which of the following is a required action for this change?",
    "a": "A. Mirroring the index",
    "b": "B. Backing up the topology",
    "c": "C. Cloning the index",
    "d": "D. Cloning the topology"
  },
  {
    "id": 0,
    "question": "2. Which of the following content sources require additional configuration but are directly supported in a standard SharePoint Server 2013 search installation?",
    "a": "A. Lotus Notes",
    "b": "B. Documentum",
    "c": "C. PeopleSoft",
    "d": "D. SAP"
  },
  {
    "id": 0,
    "question": "3. Which of the following crawl types cannot be configured on the same content source?",
    "a": "A. Differential",
    "b": "B. Incremental",
    "c": "C. Continuous",
    "d": "D. Full"
  },
  {
    "id": 0,
    "question": "4. You receive a phone call from the remote site administrator of a small SharePoint server farm whose content you have been crawling. The site has been experiencing connectivity issues that occur only during working hours. Your requirement is that the content be kept as fresh as possible. What actions can you take to correct the issue?",
    "a": "A. Disable all crawls",
    "b": "B. Increase the continuous crawl interval",
    "c": "C. Run a full crawl in the evening, but no other crawls",
    "d": "D. Decrease the continuous crawl interval"
  },
  {
    "id": 0,
    "question": "1. You want to modify the search topology of your farm. The body of content is quite large and has generated a large index. Which of the following is a required action for this change?",
    "a": "A. Mirroring the index",
    "b": "B. Backing up the topology",
    "c": "C. Cloning the index",
    "d": "D. Cloning the topology"
  },
  {
    "id": 0,
    "question": "2. Which of the following content sources require additional configuration but are directly supported in a standard SharePoint Server 2013 search installation?",
    "a": "A. Lotus Notes",
    "b": "B. Documentum",
    "c": "C. PeopleSoft",
    "d": "D. SAP"
  },
  {
    "id": 0,
    "question": "3. Which of the following crawl types cannot be configured on the same content source?",
    "a": "A. Differential",
    "b": "B. Incremental",
    "c": "C. Continuous",
    "d": "D. Full"
  },
  {
    "id": 0,
    "question": "4. You receive a phone call from the remote site administrator of a small SharePoint server farm whose content you have been crawling. The site has been experiencing connectivity issues that occur only during working hours. Your requirement is that the content be kept as fresh as possible. What actions can you take to correct the issue?",
    "a": "A. Disable all crawls",
    "b": "B. Increase the continuous crawl interval",
    "c": "C. Run a full crawl in the evening, but no other crawls",
    "d": "D. Decrease the continuous crawl interval"
  },
  {
    "id": 0,
    "question": "1. Which of the following proxy/connection groups is used for one-off, ad hoc connectivity?",
    "a": "A. Custom",
    "b": "B. Default",
    "c": "C. Direct",
    "d": "D. Standby"
  },
  {
    "id": 0,
    "question": "2. Which of the following terms describes the status of a content type that has been published from the content type hub?",
    "a": "A. Uncustomized",
    "b": "B. Customized",
    "c": "C. Sealed",
    "d": "D. Unsealed"
  },
  {
    "id": 0,
    "question": "3. Which of the following terms describes the status of a content type that has been unpublished from the content type hub?",
    "a": "A. Uncustomized",
    "b": "B. Customized\f",
    "c": "C. Sealed",
    "d": "D. Unsealed"
  },
  {
    "id": 0,
    "question": "4. Which of the following MMS Connection options should be enabled for web applications that are already attached to another fully configured MMS Connection?",
    "a": "A. This Service Application Is The Default Storage Location For Keywords",
    "b": "B. This Service Application Is The Default Storage Location For Column Specific Term Sets",
    "c": "C. Consumes Content Types From The Content Type Gallery",
    "d": "D. Push-down Content Type Publishing Updates From The Content Type Gallery To "
  },
  {
    "id": 0,
    "question": "1. Which of the following proxy/connection groups is used for one-off, ad hoc connectivity?",
    "a": "A. Custom",
    "b": "B. Default",
    "c": "C. Direct",
    "d": "D. Standby"
  },
  {
    "id": 0,
    "question": "2. Which of the following terms describes the status of a content type that has been published from the content type hub?",
    "a": "A. Uncustomized",
    "b": "B. Customized",
    "c": "C. Sealed",
    "d": "D. Unsealed"
  },
  {
    "id": 0,
    "question": "3. Which of the following terms describes the status of a content type that has been unpublished from the content type hub?",
    "a": "A. Uncustomized",
    "b": "B. Customized\f",
    "c": "C. Sealed",
    "d": "D. Unsealed"
  },
  {
    "id": 0,
    "question": "4. Which of the following MMS Connection options should be enabled for web applications that are already attached to another fully configured MMS Connection?",
    "a": "A. This Service Application Is The Default Storage Location For Keywords",
    "b": "B. This Service Application Is The Default Storage Location For Column Specific Term Sets",
    "c": "C. Consumes Content Types From The Content Type Gallery",
    "d": "D. Push-down Content Type Publishing Updates From The Content Type Gallery To "
  },
  {
    "id": 0,
    "question": "1. Which of the following directory services are supported for use with SharePoint 2013?",
    "a": "A. Active Directory Domain Services 2000",
    "b": "B. Sun Java System Directory Server 5.2",
    "c": "C. Novell eDirectory version 8.7.3",
    "d": "D. IBM Tivoli version 5.2E. All of the above"
  },
  {
    "id": 0,
    "question": "5.2C. Novell eDirectory version 8.7.3D. IBM Tivoli version 5.2E. All of the above\f2. Which of the following authentication types is supported for use with SharePoint Active Directory import?",
    "a": "A. Windows authentication",
    "b": "B. Basic authentication",
    "c": "C. Forms authentication",
    "d": "D. Trusted Claims Provider authentication"
  },
  {
    "id": 0,
    "question": "3. Which is the correct TCP port used with Active Directory imports?",
    "a": "A. TCP 1433",
    "b": "B. TCP 80",
    "c": "C. TCP 3389",
    "d": "D. TCP 389"
  },
  {
    "id": 0,
    "question": "4. You have an audience that is working, but it displays stale or incomplete expected membership information. Which of the following items should you check?",
    "a": "A. Audience rules",
    "b": "B. Timer job for the synchronization service",
    "c": "C. Compilation schedule",
    "d": "D. All of the above"
  },
  {
    "id": 0,
    "question": "1. Which of the following directory services are supported for use with SharePoint 2013?",
    "a": "A. Active Directory Domain Services 2000",
    "b": "B. Sun Java System Directory Server 5.2",
    "c": "C. Novell eDirectory version 8.7.3",
    "d": "D. IBM Tivoli version 5.2E. All of the above"
  },
  {
    "id": 0,
    "question": "5.2C. Novell eDirectory version 8.7.3D. IBM Tivoli version 5.2E. All of the above\f2. Which of the following authentication types is supported for use with SharePoint Active Directory import?",
    "a": "A. Windows authentication",
    "b": "B. Basic authentication",
    "c": "C. Forms authentication",
    "d": "D. Trusted Claims Provider authentication"
  },
  {
    "id": 0,
    "question": "3. Which is the correct TCP port used with Active Directory imports?",
    "a": "A. TCP 1433",
    "b": "B. TCP 80",
    "c": "C. TCP 3389",
    "d": "D. TCP 389"
  },
  {
    "id": 0,
    "question": "4. You have an audience that is working, but it displays stale or incomplete expected membership information. Which of the following items should you check?",
    "a": "A. Audience rules",
    "b": "B. Timer job for the synchronization service",
    "c": "C. Compilation schedule",
    "d": "D. All of the above"
  },
  {
    "id": 0,
    "question": "1. What is the supported maximum number of managed paths for use in a SharePoint web application?",
    "a": "A. 5",
    "b": "B. 100",
    "c": "C. 35",
    "d": "D. 20"
  },
  {
    "id": 0,
    "question": "2. Which of the following values is the default maximum List View Lookup Threshold?",
    "a": "A. 5,000",
    "b": "B. 20,000",
    "c": "C. 8",
    "d": "D. 2,500"
  },
  {
    "id": 0,
    "question": "3. Which of the following authentication methods is required for use with FBA?",
    "a": "A. anonymous",
    "b": "B. basic",
    "c": "C. Kerberos",
    "d": "D. SAML"
  },
  {
    "id": 0,
    "question": "4. Which of the following settings are required to enable a designer to build a new page layout using SPD?",
    "a": "A. Enable Detaching Pages From The Site Definition",
    "b": "B. Enable Customizing Master Pages And Layout Pages",
    "c": "C. Enable SharePoint Designer",
    "d": "D. Enable Managing Of The Web Site URL Structure"
  },
  {
    "id": 0,
    "question": "1. What is the supported maximum number of managed paths for use in a SharePoint web application?",
    "a": "A. 5",
    "b": "B. 100",
    "c": "C. 35",
    "d": "D. 20"
  },
  {
    "id": 0,
    "question": "2. Which of the following values is the default maximum List View Lookup Threshold?",
    "a": "A. 5,000",
    "b": "B. 20,000",
    "c": "C. 8",
    "d": "D. 2,500"
  },
  {
    "id": 0,
    "question": "3. Which of the following authentication methods is required for use with FBA?",
    "a": "A. anonymous",
    "b": "B. basic",
    "c": "C. Kerberos",
    "d": "D. SAML"
  },
  {
    "id": 0,
    "question": "4. Which of the following settings are required to enable a designer to build a new page layout using SPD?",
    "a": "A. Enable Detaching Pages From The Site Definition",
    "b": "B. Enable Customizing Master Pages And Layout Pages",
    "c": "C. Enable SharePoint Designer",
    "d": "D. Enable Managing Of The Web Site URL Structure"
  },
  {
    "id": 0,
    "question": "1. Which of the following switches is required for use in creating host header site collections in Windows PowerShell?",
    "a": "A. -HostNamed",
    "b": "B. -HostHeaderSite",
    "c": "C. -HostHeader",
    "d": "D. -HNSC"
  },
  {
    "id": 0,
    "question": "2. Which of the following links is used from My Site to create a new SSSC?",
    "a": "A. My Site",
    "b": "B. Team Site",
    "c": "C. New Site",
    "d": "D. Self Service Site"
  },
  {
    "id": 0,
    "question": "3. Which of the following terms describes a site that is no longer made available via aggregation but is still available to its members?",
    "a": "A. Closed",
    "b": "B. Offline",
    "c": "C. Unpublished",
    "d": "D. Dormant"
  },
  {
    "id": 0,
    "question": "4. Which of the following Microsoft technologies is required for site mailboxes to be used?",
    "a": "A. Microsoft Exchange",
    "b": "B. Office web applications",
    "c": "C. Outlook Web Access",
    "d": "D. Outgoing e-mail"
  },
  {
    "id": 0,
    "question": "1. Which of the following switches is required for use in creating host header site collections in Windows PowerShell?",
    "a": "A. -HostNamed",
    "b": "B. -HostHeaderSite",
    "c": "C. -HostHeader",
    "d": "D. -HNSC"
  },
  {
    "id": 0,
    "question": "2. Which of the following links is used from My Site to create a new SSSC?",
    "a": "A. My Site",
    "b": "B. Team Site",
    "c": "C. New Site",
    "d": "D. Self Service Site"
  },
  {
    "id": 0,
    "question": "3. Which of the following terms describes a site that is no longer made available via aggregation but is still available to its members?",
    "a": "A. Closed",
    "b": "B. Offline",
    "c": "C. Unpublished",
    "d": "D. Dormant"
  },
  {
    "id": 0,
    "question": "4. Which of the following Microsoft technologies is required for site mailboxes to be used?",
    "a": "A. Microsoft Exchange",
    "b": "B. Office web applications",
    "c": "C. Outlook Web Access",
    "d": "D. Outgoing e-mail"
  },
  {
    "id": 0,
    "question": "1. Which of the following services is required for use in configuring site access requests?",
    "a": "A. Inbound email",
    "b": "B. Outbound email",
    "c": "C. Business Connectivity Services",
    "d": "D. User Profile Services"
  },
  {
    "id": 0,
    "question": "2. Which of the following items can be individually secured for anonymous access?",
    "a": "A. Web application",
    "b": "B. Site or site collection",
    "c": "C. Individual lists and libraries",
    "d": "D. Individual items"
  },
  {
    "id": 0,
    "question": "3. At which of the following levels can you configure security inheritance?",
    "a": "A. Web application",
    "b": "B. Site or site collection",
    "c": "C. Individual lists and libraries",
    "d": "D. Individual items"
  },
  {
    "id": 0,
    "question": "4. Which of the following permission groups cannot have its permissions altered?",
    "a": "A. Full Control",
    "b": "B. Contribute",
    "c": "C. Limited Access",
    "d": "D. Read"
  },
  {
    "id": 0,
    "question": "1. Which of the following services is required for use in configuring site access requests?",
    "a": "A. Inbound email",
    "b": "B. Outbound email",
    "c": "C. Business Connectivity Services",
    "d": "D. User Profile Services"
  },
  {
    "id": 0,
    "question": "2. Which of the following items can be individually secured for anonymous access?",
    "a": "A. Web application",
    "b": "B. Site or site collection",
    "c": "C. Individual lists and libraries",
    "d": "D. Individual items"
  },
  {
    "id": 0,
    "question": "3. At which of the following levels can you configure security inheritance?",
    "a": "A. Web application",
    "b": "B. Site or site collection",
    "c": "C. Individual lists and libraries",
    "d": "D. Individual items"
  },
  {
    "id": 0,
    "question": "4. Which of the following permission groups cannot have its permissions altered?",
    "a": "A. Full Control",
    "b": "B. Contribute",
    "c": "C. Limited Access",
    "d": "D. Read"
  },
  {
    "id": 0,
    "question": "1. Which of the following protocols can be used within a result source?",
    "a": "A. SharePoint",
    "b": "B. Exchange",
    "c": "C. OpenSearch",
    "d": "D. All of the above"
  },
  {
    "id": 0,
    "question": "2. At which of the following levels can you configure query rules?",
    "a": "A. Search service application",
    "b": "B. Site or site collection",
    "c": "C. Web application",
    "d": "D. All of the above"
  },
  {
    "id": 0,
    "question": "3. Which of the following folders houses the display templates for result types?",
    "a": "A. Filters",
    "b": "B. Search",
    "c": "C. System",
    "d": "D. Content Web Parts"
  },
  {
    "id": 0,
    "question": "4. Which of the following options is not available within the search service application for configuration?",
    "a": "A. Managed properties",
    "b": "B. Categories",
    "c": "C. Filters",
    "d": "D. Crawled properties"
  },
  {
    "id": 0,
    "question": "1. Which of the following protocols can be used within a result source?",
    "a": "A. SharePoint",
    "b": "B. Exchange",
    "c": "C. OpenSearch",
    "d": "D. All of the above"
  },
  {
    "id": 0,
    "question": "2. At which of the following levels can you configure query rules?",
    "a": "A. Search service application",
    "b": "B. Site or site collection",
    "c": "C. Web application",
    "d": "D. All of the above"
  },
  {
    "id": 0,
    "question": "3. Which of the following folders houses the display templates for result types?",
    "a": "A. Filters",
    "b": "B. Search",
    "c": "C. System",
    "d": "D. Content Web Parts"
  },
  {
    "id": 0,
    "question": "4. Which of the following options is not available within the search service application for configuration?",
    "a": "A. Managed properties",
    "b": "B. Categories",
    "c": "C. Filters",
    "d": "D. Crawled properties"
  },
  {
    "id": 0,
    "question": "1. Which of the following tabs within the Term Set Management Tool is used to configure a term set for navigation?",
    "a": "A. General",
    "b": "B. Term-Driven Pages",
    "c": "C. Intended Use",
    "d": "D. Custom Properties"
  },
  {
    "id": 0,
    "question": "2. Which of the following are valid scopes for custom properties?",
    "a": "A. Shared properties",
    "b": "B. Indexed properties",
    "c": "C. Local properties",
    "d": "D. All of the above"
  },
  {
    "id": 0,
    "question": "3. In which of the following can you configure a Search Refiner?",
    "a": "A. Term store",
    "b": "B. Navigation tab",
    "c": "C. Custom properties",
    "d": "D. Web part"
  },
  {
    "id": 0,
    "question": "4. At which of the following levels can list refiners be configured?",
    "a": "A. Site level",
    "b": "B. Site collection level",
    "c": "C. List or library level",
    "d": "D. Term Store level"
  },
  {
    "id": 0,
    "question": "1. Which of the following tabs within the Term Set Management Tool is used to configure a term set for navigation?",
    "a": "A. General",
    "b": "B. Term-Driven Pages",
    "c": "C. Intended Use",
    "d": "D. Custom Properties"
  },
  {
    "id": 0,
    "question": "2. Which of the following are valid scopes for custom properties?",
    "a": "A. Shared properties",
    "b": "B. Indexed properties",
    "c": "C. Local properties",
    "d": "D. All of the above"
  },
  {
    "id": 0,
    "question": "3. In which of the following can you configure a Search Refiner?",
    "a": "A. Term store",
    "b": "B. Navigation tab",
    "c": "C. Custom properties",
    "d": "D. Web part"
  },
  {
    "id": 0,
    "question": "4. At which of the following levels can list refiners be configured?",
    "a": "A. Site level",
    "b": "B. Site collection level",
    "c": "C. List or library level",
    "d": "D. Term Store level"
  },
  {
    "id": 0,
    "question": "1. Which of the following can be configured within a data collector set?",
    "a": "A. Performance counters",
    "b": "B. Event trace data",
    "c": "C. Service application databases",
    "d": "D. System configuration information"
  },
  {
    "id": 0,
    "question": "2. How many web applications can be associated with a single content database in SharePoint?",
    "a": "A. 0",
    "b": "B. 1",
    "c": "C. 2000",
    "d": "D. 5000"
  },
  {
    "id": 0,
    "question": "3. Which of the following should you use to monitor the size of a single site within a site collection?",
    "a": "A. $site=Get-SPSiteCollection",
    "b": "B. $site.usage",
    "c": "C. Get-SPDatabase -webapplication",
    "d": "D. $site=get-spsite –identity http://<url>E. $site.usageF. Site settings, site collection administration, storage metrics"
  },
  {
    "id": 0,
    "question": "1. Which of the following can be configured within a data collector set?",
    "a": "A. Performance counters",
    "b": "B. Event trace data",
    "c": "C. Service application databases",
    "d": "D. System configuration information"
  },
  {
    "id": 0,
    "question": "2. How many web applications can be associated with a single content database in SharePoint?",
    "a": "A. 0",
    "b": "B. 1",
    "c": "C. 2000",
    "d": "D. 5000"
  },
  {
    "id": 0,
    "question": "3. Which of the following should you use to monitor the size of a single site within a site collection?",
    "a": "A. $site=Get-SPSiteCollection",
    "b": "B. $site.usage",
    "c": "C. Get-SPDatabase -webapplication",
    "d": "D. $site=get-spsite –identity http://<url>E. $site.usageF. Site settings, site collection administration, storage metrics"
  },
  {
    "id": 0,
    "question": "1. You are building an Internet-facing publishing portal. Content will be infrequently added to this portal, but the majority of activity will be read-heavy. Which storage level offers the most cost-efficiencies while also providing the best performance characteristics and a layer of redundancy?",
    "a": "A. RAID 0",
    "b": "B. RAID 1",
    "c": "C. RAID 5",
    "d": "D. RAID 10"
  },
  {
    "id": 0,
    "question": "2. You have a limited amount of RAID 10 storage available due to expense. Because you are configuring the SQL data tier of the SharePoint farm, you must decide how best to utilize this fast storage. Which of the following database groupings makes the best use of RAID 10 storage?",
    "a": "A. Database transaction log files",
    "b": "B. Search databases",
    "c": "C. TempDB files and transaction logs",
    "d": "D. Database data files"
  },
  {
    "id": 0,
    "question": "3. Which of the following current tools cannot be used to estimate the capacity of a SQL 2008/2012 storage subsystem?",
    "a": "A. SQLIO",
    "b": "B. SQLIOStress",
    "c": "C. SQLIOSim",
    "d": "D. IOMeter"
  },
  {
    "id": 0,
    "question": "4. Which of the following ASP.NET cache profiles should be used for a collaborative site?",
    "a": "A. Extranet",
    "b": "B. Public Internet",
    "c": "C. Disabled",
    "d": "D. Intranet"
  },
  {
    "id": 0,
    "question": "1. You are building an Internet-facing publishing portal. Content will be infrequently added to this portal, but the majority of activity will be read-heavy. Which storage level offers the most cost-efficiencies while also providing the best performance characteristics and a layer of redundancy?",
    "a": "A. RAID 0",
    "b": "B. RAID 1",
    "c": "C. RAID 5",
    "d": "D. RAID 10"
  },
  {
    "id": 0,
    "question": "2. You have a limited amount of RAID 10 storage available due to expense. Because you are configuring the SQL data tier of the SharePoint farm, you must decide how best to utilize this fast storage. Which of the following database groupings makes the best use of RAID 10 storage?",
    "a": "A. Database transaction log files",
    "b": "B. Search databases",
    "c": "C. TempDB files and transaction logs",
    "d": "D. Database data files"
  },
  {
    "id": 0,
    "question": "3. Which of the following current tools cannot be used to estimate the capacity of a SQL 2008/2012 storage subsystem?",
    "a": "A. SQLIO",
    "b": "B. SQLIOStress",
    "c": "C. SQLIOSim",
    "d": "D. IOMeter"
  },
  {
    "id": 0,
    "question": "4. Which of the following ASP.NET cache profiles should be used for a collaborative site?",
    "a": "A. Extranet",
    "b": "B. Public Internet",
    "c": "C. Disabled",
    "d": "D. Intranet"
  },
  {
    "id": 0,
    "question": "1. Which of the following actions are not steps of collecting a performance baseline?",
    "a": "A. Building a data collector set",
    "b": "B. Choosing a log storage location",
    "c": "C. Checking the application event logs",
    "d": "D. Creating a PerfMon schedule"
  },
  {
    "id": 0,
    "question": "2. Which of the following SharePoint services can benefit from client-side tracing?",
    "a": "A. User Profile Services",
    "b": "B. Search Services",
    "c": "C. BCS",
    "d": "D. InfoPath Services"
  },
  {
    "id": 0,
    "question": "3. SSMS interaction with which of the following SharePoint databases is supported?",
    "a": "A. Logging",
    "b": "B. User Profile Sync",
    "c": "C. Search",
    "d": "D. BDC"
  },
  {
    "id": 0,
    "question": "1. Which of the following actions are not steps of collecting a performance baseline?",
    "a": "A. Building a data collector set",
    "b": "B. Choosing a log storage location",
    "c": "C. Checking the application event logs",
    "d": "D. Creating a PerfMon schedule"
  },
  {
    "id": 0,
    "question": "2. Which of the following SharePoint services can benefit from client-side tracing?",
    "a": "A. User Profile Services",
    "b": "B. Search Services",
    "c": "C. BCS",
    "d": "D. InfoPath Services"
  },
  {
    "id": 0,
    "question": "3. SSMS interaction with which of the following SharePoint databases is supported?",
    "a": "A. Logging",
    "b": "B. User Profile Sync",
    "c": "C. Search",
    "d": "D. BDC"
  }
];
