angular.module('trainee', ['trainee.controllers', 'trainee.services'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/questions/random', {templateUrl: 'partials/question.html', controller: 'QuestionCtrl'});
    $routeProvider.when('/questions/ordered/:index', {templateUrl: 'partials/question.html', controller: 'QuestionCtrl'});
    $routeProvider.when('/examtips/random', {templateUrl: 'partials/examtip.html', controller: 'ExamTipCtrl'});
    $routeProvider.when('/examtips/ordered/:index', {templateUrl: 'partials/examtip.html', controller: 'ExamTipCtrl'});
    $routeProvider.otherwise({redirectTo: '/questions/random'});
  }]);

var test_examtips = [
{
    "id": 1,
    "examtip": "EXAM TIP \r\n\r\nEach of these navigational types has merit. For a group of users who are unfamiliar with \r\ncreating and maintaining terms and term sets, structural navigation might be a more \r\nappropriate choice.\r\n\r\n\r\n"
}, {
    "id": 2,
    "examtip": "EXAM TIP \r\n\r\nContent types that are syndicated function exactly as those built within site collections. \r\nWhen a content type is published into a web application, it is simply placed into the content \r\ntype gallery of each site collection for use.\r\n\r\n\r\n"
}, {
    "id": 3,
    "examtip": "EXAM TIP \r\n\r\nSearch is a critical component of any SharePoint 2013 farm. A thorough understanding of \r\neach search component’s role within the farm helps determine which component(s) are \r\nassigned to a particular server.\r\n\r\n\r\n"
}, {
    "id": 4,
    "examtip": "EXAM TIP \r\n\r\nUnderstand the limits placed on managed properties created at the site collection level \r\n(text/Boolean, neither sortable nor refinable) versus those created at the service application \r\nlevel. \r\n\r\r\n"
}, {
    "id": 5,
    "examtip": "EXAM TIP \r\n\r\nAlthough one stage is the requirement for a retention policy to be considered valid, it is \r\npossible to build multiple stages as your business needs require.\r\n\r\n\r\n"
}, {
    "id": 6,
    "examtip": "EXAM TIP \r\n\r\nSite collection policies are scoped to a single site collection. For the sake of consistency, \r\nit is possible to export a policy from one site collection and then import it to another for \r\nreuse. Be familiar with the steps required in this process.\r\n\r\n\r\n"
}, {
    "id": 7,
    "examtip": "EXAM TIP \r\n\r\nRegardless of which navigation type you choose, the ability to create a reliable navigational \r\nstructure is a critical component in site hierarchy design. Be familiar with the structural \r\nnavigation concepts (such as managed paths) as well as metadata navigation configuration \r\nrequirements.\r\n\r\n\r\n"
}, {
    "id": 8,
    "examtip": "EXAM TIP \r\n\r\nSharePoint administrators are often not the people who define term sets. Most term sets \r\nstart as tags and keywords (folksonomy) and are then promoted to a more formal status as \r\npart of a term set (taxonomy). Be familiar with how this transition takes place.\r\n\r\n\r\n"
}, {
    "id": 9,
    "examtip": "EXAM TIP \r\n\r\nIn the section on planning for software boundaries, you will note that the supported limit \r\nfor web applications in a farm is set to 20. This is not a per-web application pool limit, \r\nbut a limit for the entirety of the SharePoint farm. As with the web application pools, this \r\nlimitation is memory-dependent, and baseline RAM monitoring is recommended before \r\nincreasing the web application count to that level.\r\n\r\n\r\n"
}, {
    "id": 10,
    "examtip": "EXAM TIP \r\n\r\nThere is a significant number of these metrics given for SharePoint 2013. It would be quite \r\nhard to memorize each limit and know whether it is a boundary, threshold, or limit (for the \r\ntest); concentrate on the ones that have the largest impact—those that affect RAM, storage, \r\nand processor capacity.\r\n\r\n\r\n"
}, {
    "id": 11,
    "examtip": "EXAM TIP \r\n\r\nIn some organizations, the data tier of your SharePoint farm will be administered by one or \r\nmore SQL database administrators. This team will most likely not be familiar with the specifications \r\nand limitations present in SharePoint 2013, so you will need to be able to explain \r\nthese metrics to them.\r\n\r\n\r\n"
}, {
    "id": 12,
    "examtip": "EXAM TIP \r\n\r\nAs of this writing, the default behavior of the New-SPWebApplication cmdlet is to create \r\na web application in Windows classic authentication mode. This behavior can be averted \r\nby using the -AuthenticationProvider switch. Windows classic authentication mode is \r\ndeprecated (read: not preferred/might be removed at a later date), and should not be used; \r\nclaims authentication (Windows NTLM) should be used instead. PowerShell will dutifully \r\nwarn you of the missing switch, but only after it has executed the cmdlet and created the \r\nweb application in Windows classic mode.\r\n\r\n\r\n"
}, {
    "id": 13,
    "examtip": "EXAM TIP \r\n\r\nCreating (and most of the maintenance duties for) host named site collections is done \r\nentirely in PowerShell.\r\n\r\n\r\n"
}, {
    "id": 14,
    "examtip": "EXAM TIP \r\n\r\nAll network storage connected to SharePoint is required to meet two criteria. The first \r\ncriterion is that the storage must respond to a ping within 1 millisecond (ms), meaning that \r\nthe storage will most likely be located within the same datacenter as the host. The second \r\ncriterion is that the first byte of requested data must be returned within 20 ms (this is true \r\nregardless of the disk subsystem chosen).\r\n\r\n\r\n"
}, {
    "id": 15,
    "examtip": "EXAM TIP \r\n\r\nUnless otherwise specified, throttling is enabled by default on each web app created in the \r\nfarm.\r\n\r\n\r\n"
}, {
    "id": 16,
    "examtip": "EXAM TIP \r\n\r\nThe deployment mode can be configured using the -RoutingWeightScheme switch of the \r\nSet-SPRequestManagementSettings cmdlet.\r\n\r\n\r\n"
}, {
    "id": 17,
    "examtip": "EXAM TIP \r\n\r\nThe amount of free disk space available on the system drive of a SharePoint server should \r\nnever fall below two times the amount of server RAM; this limit is specifically designed to \r\nallow memory dumps to be stored on the disk subsystem if necessary.\r\n\r\n\r\n"
}, {
    "id": 18,
    "examtip": "EXAM TIP \r\n\r\nKnow the roles and servers assigned at each tier of the smallest fault-tolerant SharePoint \r\nfarm.\r\n\r\n\r\n"
}, {
    "id": 19,
    "examtip": "EXAM TIP \r\n\r\nThe connection speed between all SharePoint servers in a farm must meet or exceed 1 \r\nGbps. Additionally, the network latency between the web/application tiers and the data \r\ntier should be less than 1 ms.\r\n\r\n\r\n"
}, {
    "id": 20,
    "examtip": "EXAM TIP \r\n\r\nAlthough it might seem trivial at first, knowing which functionality is available at each subscription \r\nlevel is a critical component of your Office 365 design and planning effort.\r\n\r\n\r\n"
}, {
    "id": 21,
    "examtip": "EXAM TIP \r\n\r\nAuthentication is the process of determining the identity of a principal; authorization is the \r\nprocess of verifying an authenticated user’s access to a system.\r\n\r\n\r\n"
}, {
    "id": 22,
    "examtip": "EXAM TIP \r\n\r\nAlthough not present within Central Administration, SharePoint also supports Windows \r\nclassic mode for backward compatibility. Configuration of this authentication type is done \r\nentirely in Windows PowerShell; efforts should be made to move away from this type of \r\nauthentication because it does not support some SharePoint 2013 functionality (such as \r\nthe SharePoint App Store).\r\n\r\n\r\n"
}, {
    "id": 23,
    "examtip": "EXAM TIP \r\n\r\nRemember that users always authenticate to the identity provider within their organization \r\nto receive a Security Assertion Markup Language (SAML) token.\r\n\r\n\r\n"
}, {
    "id": 24,
    "examtip": "EXAM TIP \r\n\r\nIn the next few steps, you will configure ADFS for use with SharePoint. The SharePoint web \r\napplication that will use the trusted identity provider is required to use SSL.\r\n\r\n\r\n"
}, {
    "id": 25,
    "examtip": "EXAM TIP \r\n\r\nBy default, this relationship requires that the relationship be carried out over HTTPS, which \r\nis always a best practice. If you need to establish S2S over HTTP, this is possible but not as \r\nsecure, and should be done only in development environments.\r\n\r\n\r\n"
}, {
    "id": 26,
    "examtip": "EXAM TIP \r\n\r\nBe familiar with the three distinct processes that go into establishing the relationship between \r\nthese two environments.\r\n\r\n\r\n"
}, {
    "id": 27,
    "examtip": "EXAM TIP \r\n\r\nIn addition to enabling anonymous authentication for a web application, you must also \r\nconfigure sites, lists, and libraries to enable anonymous users to have access.\r\n\r\n\r\n"
}, {
    "id": 28,
    "examtip": "EXAM TIP \r\n\r\nThe capability to expire a token provides additional security for your SharePoint installation \r\nby disconnecting unused sessions. You may want to extend this value to 1200 seconds \r\n(10 minutes) for your SharePoint users, depending on how often you want them to log on.\r\n\r\n\r\n"
}, {
    "id": 29,
    "examtip": "EXAM TIP \r\n\r\nIt is not uncommon to see a user added to more than one group within a SharePoint site \r\ncollection. As an example, consider a user who belongs to both the Visitors (Reader permissions) \r\nand Members (Contributor permissions) SharePoint groups for a site. This person \r\nwill receive the greater of the two permission sets, thus having the permissions that are \r\nassigned to the Contributor permission level. \r\n\r\r\n"
}, {
    "id": 30,
    "examtip": "EXAM TIP \r\n\r\nThere are no Windows PowerShell cmdlets for the configuration of People Picker in \r\nSharePoint 2013. All the properties that provide People Picker configuration are done via \r\nSTSADM.\r\n\r\n\r\n"
}, {
    "id": 31,
    "examtip": "EXAM TIP \r\n\r\nIf your site owners are missing the Access Request Settings icon or they cannot choose the \r\nShare icon (shown in the next section), you have not yet configured outgoing e-mail settings \r\nfor your SharePoint 2013 farm.\r\n\r\n\r\n"
}, {
    "id": 32,
    "examtip": "EXAM TIP \r\n\r\nBreaking permission inheritance does not immediately change the effective permissions on \r\nthe site, list, or library. A copy of the parent’s permissions is made and applied to the object \r\nbefore permissions are split.\r\n\r\n\r\n"
}, {
    "id": 33,
    "examtip": "EXAM TIP \r\n\r\nAuthentication relies on the presence of a user name/password challenge. Credentials are \r\nnever requested from anonymous users unless they attempt to access a location that is \r\nsecured or choose to sign in to the SharePoint farm.\r\n\r\n\r\n"
}, {
    "id": 34,
    "examtip": "EXAM TIP \r\n\r\nKnow what the effect will be of altering each of these policies within a SharePoint farm, \r\nparticularly those that deny users access.\r\n\r\n\r\n"
}, {
    "id": 35,
    "examtip": "EXAM TIP \r\n\r\nOne of the key balances to be struck in defining isolation is between security and utility. \r\nKnow not only the benefits of each isolation type but its drawbacks as well.\r\n\r\n\r\n"
}, {
    "id": 36,
    "examtip": "EXAM TIP \r\n\r\nAs more and more SharePoint sites become externally facing, the need to secure anonymous \r\nresources from external search engines will become paramount. Be familiar with \r\nthese settings, which really affect the underlying web.config file components of a SharePoint \r\nweb application.\r\n\r\n\r\n"
}, {
    "id": 37,
    "examtip": "EXAM TIP \r\n\r\nKnow which components of your SharePoint environment should exist in the demilitarized \r\nzone (DMZ) between your back-end and front-end firewalls.\r\n\r\n\r\n"
}, {
    "id": 38,
    "examtip": "EXAM TIP \r\n\r\nSharePoint-aware virus scanning software should be installed on should be installed on all \r\nweb-tier servers within the farm; failure to do so causes the antivirus settings within Central \r\nAdministration to be ineffective.\r\n\r\n\r\n"
}, {
    "id": 39,
    "examtip": "EXAM TIP \r\n\r\nKnow the different types of certificates that are required to secure interfarm communications \r\nand how to generate each type.\r\n\r\n\r\n"
}, {
    "id": 40,
    "examtip": "EXAM TIP \r\n\r\nUnderstand the capabilities of RMS and what types of document and e-mail functionality it \r\ncan secure.\r\n\r\n\r\n"
}, {
    "id": 41,
    "examtip": "EXAM TIP \r\n\r\nBy default, the local administrators group on a SharePoint Server has administrative privileges \r\nto the SharePoint farm, as shown in Figure 2-56 (BUILTIN\\Administrators). In fact, \r\nthey have more privilege than farm administrators because they can install and configure \r\nitems from the command line (but are still subject to the shell admin limitations). Don’t \r\nremove this group, but be sure that you know who in your organization is assigned to this \r\ngroup from an access auditing standpoint.\r\n\r\n\r\n"
}, {
    "id": 42,
    "examtip": "EXAM TIP \r\n\r\nBecome familiar with the different administrative levels in the more common service applications \r\nfor delegation, such as the User Profile Service (UPA), Search Service, and Managed \r\nMetadata Service (MMS).\r\n\r\n\r\n"
}, {
    "id": 43,
    "examtip": "EXAM TIP \r\n\r\nBecause the service accounts are also Active Directory accounts, a distributed Active \r\nDirectory team may not know to avoid changing passwords on your SharePoint service \r\naccounts. If this happens, know how to take the new credentials and apply them by editing \r\nthe managed accounts.\r\n\r\n\r\n"
}, {
    "id": 44,
    "examtip": "EXAM TIP \r\n\r\nNewly blocked file types will have no effect on existing files already stored within a SharePoint \r\nweb application. For instance, if there are already .mp3 files present in a given web \r\napplication, blocking this file type prevents only the addition of new .mp3 files to document \r\nlibraries within the web application.\r\n\r\n\r\n"
}, {
    "id": 45,
    "examtip": "EXAM TIP \r\n\r\nWeb Part page security is assigned on a per-web application basis.\r\n\r\n\r\n"
}, {
    "id": 46,
    "examtip": "EXAM TIP \r\n\r\nAlthough you should have familiarity with the prerequisites for the new SharePoint farm, \r\nconcentrate on knowing which two roles are required for installation (Application Server \r\nRole, Web Server Role).\r\n\r\n\r\n"
}, {
    "id": 47,
    "examtip": "EXAM TIP\r\n\r\nThe prerequisiteinstaller.exe command can check for prerequisites as well as download and \r\ninstall them.\r\n\r\n\r\n"
}, {
    "id": 48,
    "examtip": "EXAM TIP \r\n\r\nAlthough SQL Server supports different settings for the Max Degree of Parallelism, SharePoint \r\ndoes not; the only valid value for this setting is 1.\r\n\r\n\r\n"
}, {
    "id": 49,
    "examtip": "EXAM TIP \r\n\r\nUnderstand the required commands to expand the media for each patch and how to add \r\nit to the Updates folder of your installation media, whether on CD/DVD or over a network \r\nshare.\r\n\r\n\r\n"
}, {
    "id": 50,
    "examtip": "EXAM TIP \r\n\r\nNo matter which language you download, the name of the file is always sharepointlanguagepack.\r\nexe (although the size changes), so it pays to store each language pack in its \r\nown directory to avoid confusion.\r\n\r\n\r\n"
}, {
    "id": 51,
    "examtip": "EXAM TIP \r\n\r\nBy default, the address for the Application Discovery and Load Balancer Service (Topology \r\nservice) of a farm is stored in the SCP container. You can input the value of your choosing \r\n(say, the address for Central Admin), but if you want to discover the address for your Topology \r\nservice, you can do so with the Get-SPTopologyServiceApplication | select URI cmdlet. \r\nYou should know how to set a new SCP in this container using Windows PowerShell.\r\n\r\n\r\n"
}, {
    "id": 52,
    "examtip": "EXAM TIP \r\n\r\nAlthough you will most likely not be called on to inspect this container in Active Directory, \r\nyou should know both the correct location in Active Directory where the SCPs are \r\nlocated (CN=Microsoft SharePoint Products) and the required permissions to write to this \r\ncontainer.\r\n\r\n\r\n"
}, {
    "id": 53,
    "examtip": "EXAM TIP\r\n\r\nIf you don’t know which account is running your timer service, look for the SharePoint \r\ntimer service entry within Computer Management.\r\n\r\n\r\n"
}, {
    "id": 54,
    "examtip": "EXAM TIP \r\n\r\nIf the Receive Connector configuration does not occur, it is likely that your SharePoint environment \r\ncannot send outbound e-mail to your users.\r\n\r\n\r\n"
}, {
    "id": 55,
    "examtip": "EXAM TIP \r\n\r\nIf you create a new service application via Central Administration, by default it is automatically \r\nassigned to the default proxy group. Conversely, creating the service application (and \r\nits proxy) via Windows PowerShell does not automatically assign that service’s application \r\nproxy to any of the available proxy groups (by default).\r\n\r\n\r\n"
}, {
    "id": 56,
    "examtip": "EXAM TIP \r\n\r\nA service application proxy can be associated with multiple proxy groups using Windows \r\nPowerShell. Also, a proxy group is not required to host each and every available service \r\napplication available within the farm.\r\n\r\n\r\n"
}, {
    "id": 57,
    "examtip": "EXAM TIP \r\n\r\nAlthough you may not be personally responsible for making DNS changes in your domain, \r\nknowing how these requirements are implemented enables you to better relate them to \r\nyour DNS administrator.\r\n\r\n\r\n"
}, {
    "id": 58,
    "examtip": "EXAM TIP \r\n\r\nIf you need more detail on the status of search in your farm, you can run the Get-SPEnterpriseSearchStatus \r\ncmdlet in Windows PowerShell.\r\n\r\n\r\n"
}, {
    "id": 59,
    "examtip": "EXAM TIP \r\n\r\nKnow the differences between changing an active search topology (a topology with an \r\nindex requires cloning) and a no-content search topology (no cloning required).\r\n\r\n\r\n"
}, {
    "id": 60,
    "examtip": "EXAM TIP \r\n\r\nKnow which content sources are available for use in a default setting: SharePoint Sites, Web \r\nSites, File Shares, Exchange Public Folders, and (conditionally) Line of Business Data. The \r\nLine of Business Data content source type requires that at least one Business Data Connectivity \r\n(BDC) service application has been created.\r\n\r\n\r\n"
}, {
    "id": 61,
    "examtip": "EXAM TIP \r\n\r\nIf you ever need to reset the search index for your SharePoint farm, you have to do a full \r\ncrawl of all content sources that should be included within the newly created index.\r\n\r\n\r\n"
}, {
    "id": 62,
    "examtip": "EXAM TIP \r\n\r\nContinuous crawls are available for use only with content sources that are SharePoint sites.\r\n\r\n\r\n"
}, {
    "id": 63,
    "examtip": "EXAM TIP \r\n\r\nSpecific content access accounts are assigned as part of crawl rules within the Specify \r\nAuthentication section.\r\n\r\n\r\n"
}, {
    "id": 64,
    "examtip": "EXAM TIP \r\n\r\nRemember that any given service application proxy can be assigned to more than one connection/\r\nproxy group at any given time.\r\n\r\n\r\n"
}, {
    "id": 65,
    "examtip": "EXAM TIP \r\n\r\nWhen a content type is published from the hub to a site collection, the published copy \r\nof the content type is considered to be “sealed,” meaning that it cannot be modified. All \r\nmodifications to this content type must occur within the context of the content type hub.\r\n\r\n\r\n"
}, {
    "id": 66,
    "examtip": "EXAM TIP \r\n\r\nDo not make more than one connection the default keyword storage location for any one \r\nweb app. And do not make more than one connection the default term set location for any \r\none web application.\r\n\r\n\r\n"
}, {
    "id": 67,
    "examtip": "EXAM TIP \r\n\r\nTerm store permissions for both Group Managers and Contributors are assigned at the \r\nterm set group level. It is not possible to assign these permissions at the term set or individual \r\nterm level.\r\n\r\n\r\n"
}, {
    "id": 68,
    "examtip": "EXAM TIP\r\n\r\nKnow how to specify a proxy group (including the default proxy group) in Windows PowerShell \r\nfor a new service application.\r\n\r\n\r\n"
}, {
    "id": 69,
    "examtip": "EXAM TIP \r\n\r\nAlthough your domain administrator will be making the replication changes to Active \r\nDirectory, you should be familiar with this process and also know what versions of Active \r\nDirectory are supported for profile synchronization.\r\n\r\n\r\n"
}, {
    "id": 70,
    "examtip": "EXAM TIP \r\n\r\nUntil an audience in UPA has been compiled, it is useless; no values exist in an audience \r\nuntil after it has been compiled.\r\n\r\n\r\n"
}, {
    "id": 71,
    "examtip": "EXAM TIP \r\n\r\nThere are a supported maximum number of managed paths per web application (20). \r\nAlthough it is possible to exceed this number, doing so places an extra processing load on \r\nthe web tier servers in your farm.\r\n\r\n\r\n"
}, {
    "id": 72,
    "examtip": "EXAM TIP \r\n\r\nIf the web application you are using hosts host named site collections, do not forget to \r\ninclude the -HostHeader switch with your New-ManagedPath cmdlet; otherwise, it does \r\nnot work correctly. Also, if the requirements for your new managed path indicate that you \r\nneed to build an explicit inclusion, don’t forget to add the -Explicit switch to the New-\r\nManagedPath cmdlet.\r\n\r\n\r\n"
}, {
    "id": 73,
    "examtip": "EXAM TIP \r\n\r\nKnow the difference between Request Management and HTTP throttling. Request Management \r\nenables you to proactively account for the performance capability of each web \r\ntier server, whereas HTTP throttling is a purely reactionary behavior on the part of an \r\noverloaded web tier server.\r\n\r\n\r\n"
}, {
    "id": 74,
    "examtip": "EXAM TIP\r\n\r\nBe familiar with the appropriate list thresholds, particularly the List View Threshold (LVT) \r\nfor users and the List View Lookup Threshold values.\r\n\r\n\r\n"
}, {
    "id": 75,
    "examtip": "EXAM TIP\r\n\r\nAlthough it is perfectly reasonable to point multiple URLs to the same web site in IIS (and \r\nsupported in SharePoint), it is important to remember that SharePoint has to figure out \r\nhow to map URLs and so on to the incoming requests. If you receive error messages in \r\nEvent Viewer and Unified Logging Service (ULS) logs about missing AAM references, note \r\nwhat the inbound URL is and correct the AAM settings.\r\n\r\n\r\n"
}, {
    "id": 76,
    "examtip": "EXAM TIP\r\n\r\nAlthough SharePoint 2013 still supports classic mode authentication for backward-\r\ncompatibility purposes, this authentication mechanism does not work with several key \r\ncomponents of SharePoint 2013. Use the Convert-SPWebApplication cmdlet to upgrade \r\nweb apps that are using classic mode authentication to claims-based authentication.\r\n\r\n\r\n"
}, {
    "id": 77,
    "examtip": "EXAM TIP\r\n\r\nEach zone for a particular URL can (and most often does) have a different authentication \r\nprovider. Be familiar with the three main types of user authentication methods: Windows \r\nclaims (NTLM, Kerberos, and basic), SAML-based claims (using a trusted identity provider), \r\nand forms-based authentication (FBA) claims (using ASP.NET FBA).\r\n\r\n\r\n"
}, {
    "id": 78,
    "examtip": "EXAM TIP\r\n\r\nEasily the most crucial configuration component for SPD, the customization/unghosting \r\nof pages can account for performance losses over time. Be familiar with what it means to \r\ncause a page to revert to its template.\r\n\r\n\r\n"
}, {
    "id": 79,
    "examtip": "EXAM TIP\r\n\r\nIn order for search and other components to work effectively, there must be a root site collection \r\nin a host header web application. This site should only be created; it should never \r\nbe configured or used.\r\n\r\n\r\n"
}, {
    "id": 80,
    "examtip": "EXAM TIP \r\n\r\nAlthough the default behavior is to build self-service sites beneath the My Site web \r\napplication, there is no reason why you cannot choose the URL of another web app for \r\noption D in the previous list. The only thing you must do in addition is to configure SSSC \r\non the destination web app.\r\n\r\n\r\n"
}, {
    "id": 81,
    "examtip": "EXAM TIP\r\n\r\nIt is possible to add individuals to the SCAs from within a site collection; additionally, you \r\ncan designate someone as an owner of an individual site. However, neither of these people \r\nis responsible for receiving notifications about site status and resourcing—that role is only \r\nfor the primary and secondary SCAs of a site collection.\r\n\r\n\r\n"
}, {
    "id": 82,
    "examtip": "EXAM TIP\r\n\r\nUsers do not receive reminder e-mail if the SharePoint farm does not have outgoing e-mail \r\nconfigured and functional. Ensure that this service is available before placing any quota \r\nrestrictions within your farm.\r\n\r\n\r\n"
}, {
    "id": 83,
    "examtip": "EXAM TIP\r\n\r\nA site that has been closed is very different from a site that has been deleted.\r\n\r\n\r\n"
}, {
    "id": 84,
    "examtip": "EXAM TIP\r\n\r\nPrior to configuring a team mailbox, some configuration effort has to take place both on \r\nthe part of the Exchange Server and the SharePoint Server admins. This effort includes \r\ninstalling the Exchange Web Services API on the SharePoint Server, and the establishment \r\nof OAuth Trust and Service permissions on both Exchange and SharePoint Server \r\nenvironments. \r\n\r\r\n"
}, {
    "id": 85,
    "examtip": "EXAM TIP\r\n\r\nAccess requests are some of the few e-mail interactions that are not sent directly to a site \r\ncollection administrator (by default). These e-mail messages are often sent to a group e-\r\nmail box because you can choose only a single e-mail address.\r\n\r\n\r\n"
}, {
    "id": 86,
    "examtip": "EXAM TIP \r\n\r\nDepending on the security considerations for your SharePoint farm, you may want to make \r\nthe store available for users to view but review and approve any app before it is installed.\r\n\r\n\r\n"
}, {
    "id": 87,
    "examtip": "EXAM TIP \r\n\r\nMerely allowing anonymous access at the web application makes little difference to the \r\ncontent available within the web application. Be aware of how anonymous access is applied \r\nto each site or site collection and audit each web app occasionally. External search engines \r\ncan be used for this task and quickly expose any security flaws you may have.\r\n\r\n\r\n"
}, {
    "id": 88,
    "examtip": "EXAM TIP\r\n\r\nIt is very important to note that the act of re-inheriting permissions not only affects this \r\nsite but also all sites beneath this level that inherit permissions from this site. You may \r\ninadvertently expose content if you apply these changes incorrectly.\r\n\r\n\r\n"
}, {
    "id": 89,
    "examtip": "EXAM TIP\r\n\r\nAlthough you can alter the OOB permission levels (with the exception of Full Control and \r\nLimited Access), doing so would not be wise until you understand the ramifications of such \r\na change. For instance, you may decide that users holding the Contribute permission level \r\nshould not be able to delete items (a fairly common request). Instead of altering the OOB \r\npermission Contribute permission level, consider building a similar permission level, perhaps \r\ncalled Contribute (No Delete), and assigning users to that permission level.\r\n\r\n\r\n"
}, {
    "id": 90,
    "examtip": "EXAM TIP\r\n\r\nIt is possible (although not very likely) to cause a security breach by having an iframe \r\nrepresent content in a site that has been compromised. Choosing to limit your users to a \r\nparticular subset of external domains is the best way to strike a balance between showing \r\nexternal content and showing none at all.\r\n\r\n\r\n"
}, {
    "id": 91,
    "examtip": "EXAM TIP\r\n\r\nAlthough search scopes are deprecated, they can still be viewed and used in queries. They \r\ncannot, however, be edited in SharePoint 2013; if you need to change a scope, you will \r\ninstead need to replace it with a new result source that accomplishes the same function.\r\n\r\n\r\n"
}, {
    "id": 92,
    "examtip": "EXAM TIP\r\n\r\nBe familiar with each of the query conditions and the potential effect they can have on the \r\nquery rules.\r\n\r\n\r\n"
}, {
    "id": 93,
    "examtip": "EXAM TIP\r\n\r\nIf you look at your settings menu, but do not see the Design Manager link, there is a good \r\nchance that you do not have the publishing features activated in this site collection. These \r\nfeatures are a requirement for much of the ease-of-design functionality in SharePoint \r\nServer 2013.\r\n\r\n\r\n"
}, {
    "id": 94,
    "examtip": "EXAM TIP\r\n\r\nBe familiar with the structure of a meta tag and the way it can be added for your Internet–\r\nfacing SharePoint site.\r\n\r\n\r\n"
}, {
    "id": 95,
    "examtip": "EXAM TIP\r\n\r\nBe familiar with the four different display templates folders and which affect the result \r\ntype functionality.\r\n\r\n\r\n"
}, {
    "id": 96,
    "examtip": "EXAM TIP\r\n\r\nBe familiar with the four different display templates folders and which affect the result \r\ntype functionality.\r\n\r\n\r\n"
}, {
    "id": 97,
    "examtip": "EXAM TIP\r\n\r\nBe familiar with the configuration and process of converting a crawled property to a \r\nmanaged property.\r\n\r\n\r\n"
}, {
    "id": 98,
    "examtip": "EXAM TIP\r\n\r\nAlthough the designated site collections do indeed have read access to the original term \r\nset, they cannot change it.\r\n\r\n\r\n"
}, {
    "id": 99,
    "examtip": "EXAM TIP\r\n\r\nUnderstand the differences between these two types of navigation. Faceted navigation has \r\nto do with refining content based on the context; site navigation enables you to use a term \r\nset for global and current navigation.\r\n\r\n\r\n"
}, {
    "id": 100,
    "examtip": "EXAM TIP\r\n\r\nBe familiar with the process of building a product catalog, assigning terms in the term set, \r\nand then allowing another publishing site to consume the result.\r\n\r\n\r\n"
}, {
    "id": 101,
    "examtip": "EXAM TIP\r\n\r\nCustom properties are almost never used outside of custom development efforts.\r\n\r\n\r\n"
}, {
    "id": 102,
    "examtip": "EXAM TIP\r\n\r\nBe familiar with the different refiners available OOB and what each one can provide from a \r\nfunctionality standpoint (such as the modified date slider control). \r\n\r\r\n"
}, {
    "id": 103,
    "examtip": "EXAM TIP\r\n\r\nBe familiar with the configuration steps required to configure a refiner both in the term set \r\nas well as a web part.\r\n\r\n\r\n"
}, {
    "id": 104,
    "examtip": "EXAM TIP \r\n\r\nUsing the –MinimumLevel switch with Get-SPLogEvent enables you to look for events that \r\nare equal to or more severe than the level you specify. There are only two valid values: Error \r\nor Warning.\r\n\r\n\r\n"
}, {
    "id": 105,
    "examtip": "EXAM TIP \r\n\r\nThe counters listed previously are those commonly used to troubleshoot core performance \r\nlevels on a SharePoint server. Optimal values for the major performance counters can be \r\nfound on TechNet at http://technet.microsoft.com/en-us/library/ff758658.aspx. \r\n\r\r\n"
}, {
    "id": 106,
    "examtip": "EXAM TIP \r\n\r\nAlthough these caching mechanisms all enhance performance in a SharePoint farm, know \r\nwhich are enabled by default versus those that you must enable manually. Also know which \r\ntypes of items might be affected by each of the three cache types.\r\n\r\n\r\n"
}, {
    "id": 107,
    "examtip": "EXAM TIP \r\n\r\nBe familiar with the steps required to both enable and configure usage and health \r\nproviders—specifically how to schedule the log collection and select the events being \r\ncaptured.\r\n\r\n\r\n"
}, {
    "id": 108,
    "examtip": "EXAM TIP \r\n\r\nMonitoring the content database is important, but addressing its growth is even more \r\nimportant. Know how to move site collections from one content database to another (hint: \r\nWindows PowerShell), how to create a new content database attached to the same web \r\napplication, and how to restrict the addition of new site collections to a content database \r\nthat is already quite large.\r\n\r\n\r\n"
}, {
    "id": 109,
    "examtip": "EXAM TIP \r\n\r\nBecause of Windows PowerShell’s integration with the object model, the need for a system \r\nadministrator to understand the properties of an object is more important than ever. Be \r\nfamiliar with the concepts to both retrieve and alter these properties.\r\n\r\n\r\n"
}, {
    "id": 110,
    "examtip": "EXAM TIP \r\n\r\nNetwork Attached Storage (NAS) can be used for SharePoint storage, but this configuration \r\nis supported only for Remote Blob Storage (RBS).\r\n\r\n\r\n"
}, {
    "id": 111,
    "examtip": "EXAM TIP \r\n\r\nThe URL of a host-named site collection is automatically considered to be in the Default \r\nzone.\r\n\r\n\r\n"
}, {
    "id": 112,
    "examtip": "EXAM TIP \r\n\r\nAlthough there are dozens of boundaries in SharePoint, there are a few that every administrator \r\nshould know by heart. Maximum file size, zones in a farm, and crawl document size \r\nlimits are all good metrics to be familiar with.\r\n\r\n\r\n"
}, {
    "id": 113,
    "examtip": "EXAM TIP \r\n\r\nRecycle bins are some of the most straightforward and most misunderstood components \r\nin SharePoint. Knowing and understanding the behaviors of how a document moves from \r\none stage recycle bin to another is key to understanding how documents that are “hidden” \r\nmight be consuming space.\r\n\r\n\r\n"
}, {
    "id": 114,
    "examtip": "EXAM TIP \r\n\r\nThe use of the ASP.NET output cache requires that the publishing feature be active on your \r\nsite. The ASP.NET output cache functionality is disabled by default.\r\n\r\n\r\n"
}, {
    "id": 115,
    "examtip": "EXAM TIP \r\n\r\nNetwork administration is not a core requirement for being a SharePoint administrator. \r\nKnowing how concepts such as subnets and VLANs can work to separate client and server \r\ncommunications, however, may be key to understanding a very simple way to improve \r\nSharePoint connectivity and performance.\r\n\r\n\r\n"
}, {
    "id": 116,
    "examtip": "EXAM TIP \r\n\r\nPerfMon is one of the most misunderstood and underutilized tools in Windows Server. \r\nUnderstanding not only how to capture point-in-time metrics but also how to capture a \r\nperformance baseline over time is a must-have skill for an experienced SharePoint farm \r\nadministrator.\r\n\r\n\r\n"
}, {
    "id": 117,
    "examtip": "EXAM TIP \r\n\r\nSharePoint farm administrators are becoming more and more versatile. One of the key \r\ntoolsets we are learning to master is the simple SSMS tool. Understand how to connect to a \r\nserver, run a simple query, and view the result.\r\n\r\n\r\n"
}, {
    "id": 118,
    "examtip": "EXAM TIP \r\n\r\nThe Developer Dashboard is an indispensable tool for a SharePoint troubleshooter, especially \r\nbecause it can retrieve correlation IDs and their meaning from the back-end server. \r\nUnderstand how to enable this tool via Windows PowerShell and also how to activate/deactivate/\r\nuse this tool at a basic level.\r\n\r\n\r\n"
}, {
    "id": 119,
    "examtip": "EXAM TIP \r\n\r\nRegardless of how you choose to analyze the ULS logs/trace logs, knowing their function \r\nand being able to configure and evaluate them are key SharePoint skills.\r\n\r\n\r\n"
}
];

var test_questions = [
{
    "id": 0,
    "source" : "certexam",
    "question": "QUESTION 2. You are managing a SharePoint farm in an Active Directory Domain Services (AD D5) domain. \n You need to configure a service account to use domain credentials. What should you do first?",
    "answer": ["D"],
    "a": "A. Configure the service account to use a domain user account.",
    "b": "B. Register the domain credentials in the Farm Administrators group.",
    "c": "C. Configure the service account to use a local user account.",
    "d": "D. Register the domain credentials as a SharePoint managed account.",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": "",
    "explanation" : ""
},
{
    "id": 0,
    "source" : "certexam",
    "question": "QUESTION 6  A company named Contoso, Ltd. has a SharePoint farm. The farm has one Search service application  configured. The Search service application contains five crawl databases, all of which contain content. Contoso plans to crawl knowledge base content from its partner company Litware, Inc. The knowledge base content must be stored in a dedicated crawl database. You need to configure crawling. What should you do?",
    "answer": ["A"],
    "a": "A. Add a crawl database that contains the Litware knowledge base to the existing Search service",
    "b": "B. Provision a new Search service application. Configure the service application to crawl the Litware knowledge base content.",
    "c": "C. Set the MaxCrawlDatabase parameter to 6.",
    "d": "D. Create a dedicated Microsoft SQL Server instance for the Litware crawl database.",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": "",
    "explanation" : ""
},
{
    "id": 0,
    "source" : "certexam",
    "question": "QUESTION 9 \n A company uses SharePoint 2013 Server as its intranet portal. The Marketing department publishes many news articles, press releases, and corporate communications to the intranet home page. You need to ensure that the Marketing department pages do not impact intranet performance. Which two actions should you perform? (Each correct answer presents part of the solution.Choose two.)",
    "answer": ["A","D"],
    "a": "A. In Central Administration, set up a User Policy for the Super User and Super Reader accounts.",
    "b": "B. Configure IIS to use the Super User and Super Reader accounts for caching.",
    "c": "C. Use the Farm Configuration Wizard to configure the Super User and Super Reader accounts.",
    "d": "D. Use Windows PowerShell to add the Super User and Super Reader accounts.",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": "",
    "explanation" : ""
},

{
    "id": 0,
    "source" : "certexam",
    "question": "Question 10. \nYou are managing a SharePoint farm. Diagnostic logs are rapidly consuming disk space. You need to minimize the amount of log data written to the disk. Which two actions should you perform? (Each correct answer presents part of the solution. Choose two.)",
    "answer": ["C","D"],
    "a": "A. Set the log trace level to Medium.",
    "b": "B. Set the log trace level to Verbose.",
    "c": "C. Set the log event level to Warning.",
    "d": "D. Set the log trace level to Monitorable.",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": "",
    "explanation" : "Note: When using the Unified Logging System (ULS) APIs to define events or trace logs, one of the values you must supply is the ULS level. Levels are settings that indicate the severity of an event or trace and are also used for throttling, to prevent repetitive information from flooding the log files. Reference: Trace and Event Log Severity Levels"
},

{
    "id": 0,
    "source" : "certexam",
    "question": "A company's SharePoint environment contains three web applications. The root site collections of the web applications host the company intranet site, My Sites, and a Document Center. SharePoint is configured to restrict the default file types, which prevents users from uploading Microsoft Outlook Personal Folder (.pst) files. The company plans to require employees to maintain copies of their .pst files in their My Site libraries. You need to ensure that employees can upload .pst files to My Site libraries. In which location should you remove .pst files from the blocked file types?",
    "answer": ["D"],
    "a": "A. The File Types area of the Search service application section of Central Administration",
    "b": "B. The General Security page in the site settings for the site collection",
    "c": "C. The Blocked File Types page in the site settings for the site collection",
    "d": "D. The General Security section of the Security page of Central Administration",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": "",
    "explanation" : "Note: When using the Unified Logging System (ULS) APIs to define events or trace logs, one of the values you must supply is the ULS level. Levels are settings that indicate the severity of an event or trace and are also used for throttling, to prevent repetitive information from flooding the log files. Reference: Trace and Event Log Severity Levels"
},
{
    "id": 0,
    "source" : "certexam",
    "question": "QUESTION 56  You are managing a SharePoint farm. The SharePoint databases are configured to run on a dedicated instance of Microsoft SQL Server 2008 R2 Service Pack 1. You need to optimize query executions.  What should you do?",
    "answer": ["A"],
    "a": "A. Move the master database to a RAID 10 volume.",
    "b": "B. Set the maximum degree of parallelism for SQL Server instances to 0.",
    "c": "C. Set the maximum degree of parallelism for SQL Server instances to 4.",
    "d": "D. Set the maximum degree of parallelism for SQL Server instances to 1.",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},

{
    "id": 0,
    "source" : "certexam",
    "question": "QUESTION 57 \n You are managing SharePoint Online site collections.\n You need to assign the minimum permission level necessary to create subsites.\n Which permission level should you assign?\n",
    "answer": ["C"],
    "a": "A. Approve",
    "b": "B. Design",
    "c": "C. Manage Hierarchy",
    "d": "D. Contribute",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},

{
    "id": 0,
    "source" : "certexam",
    "question": "QUESTION 59 \n A SharePoint farm includes two front-end web servers, one application server, and two clustered servers \n that run Microsoft SQL Server. The SharePoint Foundation Web Application service is not running on the\n application server.\n You plan to configure the SharePoint farm to receive and store email messages and email message\n attachments in libraries.\n You need to ensure that users can send email messages and attachments directly to libraries across the\n entire farm. You must accomplish this goal by using the least amount of effort.\n Which two actions should you perform? \n (Each correct answer presents part of the solution. Choose two.)\n",
    "answer": ["B,D"],
    "a": "A. Install and configure the Simple Mail Transfer Protocol (SMTP) service on each application server.",
    "b": "B. Install and configure the Simple Mail Transfer Protocol (SMTP) service on each front-end web server.",
    "c": "C. Enable incoming email by using the Automatic settings mode.",
    "d": "D. Enable incoming email by using the Advanced settings mode.",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},

{
    "id": 0,
    "source" : "certexam",
    "question": "QUESTION 61 \n You are managing a site collection in a SharePoint farm.\n You need to configure the minimum level of permissions necessary for users to manage lists in the site\n collection.\n What permission level should you configure?\n",
    "answer": ["D"],
    "a": "A. Contribute",
    "b": "B. Read",
    "c": "C. Full Control",
    "d": "D. Design",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},

{
    "id": 0,
    "source" : "certexam",
    "question": "QUESTION 63 \n You are managing a SharePoint farm.\n You need to enable friendly URLs for a term set.\n What should you configure?\n",
    "answer": ["B"],
    "a": "A. Term set tagging",
    "b": "B. Managed navigation",
    "c": "C. Custom properties",
    "d": "D. Search refinement",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},

{
    "id": 0,
    "source" : "certexam",
    "question": "QUESTION 65 \n You are managing a SharePoint farm. The SharePoint databases are configured to run on a dedicated \n instance of Microsoft SQL Server 2008 R2 Service Pack 1.\n You need to optimize query executions.\n What should you do?\n",
    "answer": ["D"],
    "a": "A. Move the master database to a RAID 10 volume.",
    "b": "B. Move the SharePoint databases to a RAID 10 volume.",
    "c": "C. Set the maximum degree of parallelism for SQL Server instances to 0.",
    "d": "D. Move the master database to a RAID 5 volume.",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},

{
    "id": 0,
    "source" : "certexam",
    "question": "QUESTION 66 \n You are managing a site collection in a SharePoint farm.\n You need to configure the minimum level of permissions necessary for users to manage lists in the site collection.\n What permission level should you configure?\n",
    "answer": ["C"],
    "a": "A. Limited Access",
    "b": "B. View Only",
    "c": "C. Edit",
    "d": "D. Create",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},

{
    "id": 0,
    "source" : "certexam",
    "question": "QUESTION 68 \n You are the farm administrator for a single-server SharePoint 2010 Foundation environment.\n The company plans to upgrade to SharePoint 2013 Foundation.\n You need to ensure that the existing server meets the minimum requirements.\n Which three requirements must you meet? (Each correct answer presents part of the solution.\n Choose three.)\n",
    "answer": ["B,C,D"],
    "a": "A. 64-bit edition of Windows Server 2008 SP2",
    "b": "B. 64-bit processor",
    "c": "C. 8 GB of RAM",
    "d": "D. 80 GB of free disk space for the system drive",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},

{
    "id": 0,
    "source" : "certexam",
    "question": "QUESTION 69 \n You are managing a site collection in a SharePoint farm. \n You need to configure the minimum level of permissions necessary for users to manage lists in the site collection.\n What permission level should you configure?\n",
    "answer": ["A"],
    "a": "A. Edit",
    "b": "B. Contribute",
    "c": "C. Read",
    "d": "D. Limited Access",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},
{
    "id": 0,
    "source" : "certexam",
    "question": "QUESTION 24\nA company is planning to upgrade from SharePoint 2010 to SharePoint 2013.\nYou need to find out the web traffic capacity of the SharePoint farm by using a Microsoft Visual Studio\nTeam System project file.\nWhich tool should you use?",
    "answer": ["D"],
    "a": "A. Network Monitor",
    "b": "B. SharePoint Health Analyzer",
    "c": "C. SharePoint Diagnostic Studio",
    "d": "D. Load Testing Kit (LTK)",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},
{
    "id": 0,
    "source" : "certexam",
    "question": " QUESTION 25\nYou install SharePoint Server in a three-tiered server farm that meets the minimum requirements fo SharePoint 2013 and surrounding technologies. The content databases will reside on Fibre Channel drives in a storage area network (SAN). The backup solution will utilize SAN snapshots.\nYou are estimating storage requirements. You plan to migrate 6 TB of current content from file shares to SharePoint.\nYou need to choose the content database size that will optimize performance, minimize administrative overhead, and minimize the number of content databases.\nWhich content database size should you choose?",
    "answer": ["C"],
    "a": "A. 100 GB",
    "b": "B. 200 GB",
    "c": "C. 3 TB",
    "d": "D. 6 TB",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},
{
    "id": 0,
    "source" : "certexam",
    "question": " QUESTION 26\nA web application is configured in a SharePoint environment.\nA user receives an application error message that includes a correlation ID.\nYou need to find out the cause of the error.\nWhich two actions can you perform to achieve this goal? (Each correct answer presents a complete\nsolution. Choose two.)",
    "answer": ["A","B"],
    "a": "A. Locate the correlation ID in the Security event log.",
    "b": "B. Enable the Developer Dashboard and review the content.",
    "c": "C. Locate the correlation ID in the Unified Logging Service (ULS).",
    "d": "D. Locate the correlation ID in the System event log.",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},
{
    "id": 0,
    "source" : "certexam",
    "question": " QUESTION 28\nA company has a SharePoint environment that consists of two web applications. The first web application is\nused as the corporate intranet site, and the second web application hosts several custom apps. The custom\napps use Microsoft Business Connectivity Services (BCS) Web Parts to retrieve data from external\nsystems.\nThe home page of the second web application displays information from three custom apps and renders\nslowly.\nYou need to identify the custom app that is causing the slow response times.\nWhich tool should you use?",
    "answer": ["A"],
    "a": "A. SharePoint Web Analytics service application",
    "b": "B. SharePoint audit log reports",
    "c": "C. SharePoint Health Analyzer",
    "d": "D. Developer Dashboard",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},
{
    "id": 0,
    "source" : "certexam",
    "question": " QUESTION 29You are managing a SharePoint farm.The SharePoint databases are configured to run on a dedicated instance of Microsoft SQL Server 2008 R2Service Pack 1.You need to optimize query executions.What should you do?",
    "answer": ["B"],
    "a": "A. Move the SharePoint databases to a RAID 10 volume.",
    "b": "B. Move the SharePoint databases to a RAID 5 volume.",
    "c": "C. Set the maximum degree of parallelism for SQL Server instances to 4.",
    "d": "D. Set the maximum degree of parallelism for SQL Server instances to 0.",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},
{
    "id": 0,
    "source" : "certexam",
    "question": " QUESTION 30\nYou are managing a site collection in a SharePoint farm.\nYou need to configure the minimum level of permissions necessary for users to manage lists in the site\ncollection.\nWhat permission level should you configure?",
    "answer": ["C"],
    "a": "A. Full Control",
    "b": "B. Create",
    "c": "C. Design",
    "d": "D. Contribute",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},
{
    "id": 0,
    "source" : "certexam",
    "question": " QUESTION 33\nYou are managing a SharePoint farm.\nYou need to collect information about the health of a web application.\nWhat should you use?",
    "answer": ["D"],
    "a": "A. SharePoint Health Analyzer",
    "b": "B. Windows Management Instrumentation (WMI)",
    "c": "C. SharePoint Developer Dashboard",
    "d": "D. Timer jobs",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},
{
    "id": 0,
    "source" : "certexam",
    "question": "QUESTION 56 \nYou are managing a SharePoint farm. The SharePoint databases are configured to run on a dedicated \ninstance of Microsoft SQL Server 2008 R2 Service Pack 1. You need to optimize query executions. \nWhat should you do? \n",
    "answer": ["A"],
    "a": "A. Move the master database to a RAID 10 volume.",
    "b": "B. Set the maximum degree of parallelism for SQL Server instances to 0.",
    "c": "C. Set the maximum degree of parallelism for SQL Server instances to 4.",
    "d": "D. Set the maximum degree of parallelism for SQL Server instances to 1.",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},

{
    "id": 0,
    "source" : "certexam",
    "question": " QUESTION 57 \nYou are managing SharePoint Online site collections.\nYou need to assign the minimum permission level necessary to create subsites.\nWhich permission level should you assign?\n",
    "answer": ["C"],
    "a": "A. Approve",
    "b": "B. Design",
    "c": "C. Manage Hierarchy",
    "d": "D. Contribute",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},

{
    "id": 0,
    "source" : "certexam",
    "question": " QUESTION 59 \nA SharePoint farm includes two front-end web servers, one application server, and two clustered servers\nthat run Microsoft SQL Server. The SharePoint Foundation Web Application service is not running on the\napplication server.\nYou plan to configure the SharePoint farm to receive and store email messages and email message\nattachments in libraries.\nYou need to ensure that users can send email messages and attachments directly to libraries across the\nentire farm. You must accomplish this goal by using the least amount of effort.\nWhich two actions should you perform? (Each correct answer presents part of the solution.\nChoose two.)\n",
    "answer": ["B","D"],
    "a": "A. Install and configure the Simple Mail Transfer Protocol (SMTP) service on each application server.",
    "b": "B. Install and configure the Simple Mail Transfer Protocol (SMTP) service on each front-end web server.",
    "c": "C. Enable incoming email by using the Automatic settings mode.",
    "d": "D. Enable incoming email by using the Advanced settings mode.",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},
{
    "id": 0,
    "source" : "certexam",
    "question": " QUESTION 61\nYou are managing a site collection in a SharePoint farm.\nYou need to configure the minimum level of permissions necessary for users to manage lists in the site\ncollection.\nWhat permission level should you configure?",
    "answer": ["D"],
    "a": "A. Contribute",
    "b": "B. Read",
    "c": "C. Full Control",
    "d": "D. Design",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},
{
    "id": 0,
    "source" : "certexam",
    "question": " QUESTION 63\nYou are managing a SharePoint farm.\nYou need to enable friendly URLs for a term set.\nWhat should you configure?\n",
    "answer": ["B"],
    "a": "A. Term set tagging",
    "b": "B. Managed navigation",
    "c": "C. Custom properties",
    "d": "D. Search refinement",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},
{
    "id": 0,
    "source" : "certexam",
    "question": " QUESTION 65 \nYou are managing a SharePoint farm. The SharePoint databases are configured to run on a dedicated \ninstance of Microsoft SQL Server 2008 R2 Service Pack 1.\nYou need to optimize query executions.\nWhat should you do?\n",
    "answer": ["D"],
    "a": "A. Move the master database to a RAID 10 volume.",
    "b": "B. Move the SharePoint databases to a RAID 10 volume.",
    "c": "C. Set the maximum degree of parallelism for SQL Server instances to 0.",
    "d": "D. Move the master database to a RAID 5 volume.",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},
{
    "id": 0,
    "source" : "certexam",
    "question": " QUESTION 66 \nYou are managing a site collection in a SharePoint farm.\nYou need to configure the minimum level of permissions necessary for users to manage lists in the site collection.\nWhat permission level should you configure?\n",
    "answer": ["C"],
    "a": "A. Limited Access",
    "b": "B. View Only",
    "c": "C. Edit",
    "d": "D. Create",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},
{
    "id": 0,
    "source" : "certexam",
    "question": " QUESTION 68\nYou are the farm administrator for a single-server SharePoint 2010 Foundation environment.\nThe company plans to upgrade to SharePoint 2013 Foundation.\nYou need to ensure that the existing server meets the minimum requirements.\nWhich three requirements must you meet? (Each correct answer presents part of the solution.\nChoose three.)\n",
    "answer": ["B","C","D"],
    "a": "A. 64-bit edition of Windows Server 2008 SP2",
    "b": "B. 64-bit processor",
    "c": "C. 8 GB of RAM",
    "d": "D. 80 GB of free disk space for the system drive",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},
{
    "id": 0,
    "source" : "certexam",
    "question": "QUESTION 69 \nYou are managing a site collection in a SharePoint farm. \nYou need to configure the minimum level of permissions necessary for users to manage lists in the site collection.\nWhat permission level should you configure?\n",
    "answer": ["A"],
    "a": "A. Edit",
    "b": "B. Contribute",
    "c": "C. Read",
    "d": "D. Limited Access",
    "a_answer": "",
    "b_answer": "",
    "c_answer": "",
    "d_answer": ""
},{
        "id": 0,
        "source" : "certexam",
        "question": "You are the term store manager of a SharePoint environment. \n\nYou need to make term sets available across the entire farm. You must ensure that users can reuse terms but not edit terms. \n\nWhich two actions should you perform? (Each correct answer presents part of the solution. \nChoose two.) ",
        "answer": ["A","B"],
        "a": "A. Prohibit the use of keywords other than those in a specific term set. ",
        "b": "B. Create a global term set. ",
        "c": "C. Enable term pinning. ",
        "e": "E. Create a local term set. ",
        "explanation":"Anyone can add a new term to an open term set. Only people who were identified as contributors to a term set group can add terms to a closed term set in the group. For example, a term set that represents cost centers would probably be closed. A term set that represents contributors to a charity might be open. On global term set see step 8) below. Make a term set available to other site collections After you create a term set on the authoring site collection, you have to make it available to publishing site collections. You can make a term set available to all site collections or to specific site collections. "
    },
    {
        "id": 0,
        "source" : "certexam",
        "question": "A company is planning to deploy My Sites to its 25,000 employees. The company will maintain dedicated content databases for the storage of personal site collections. \n\nYou need to create the minimum number of content databases required to support the My Sites. \n\nWhat should you do? ",
        "answer": ["D"],
        "a": "A. Create three content databases. Set the value of the WarningSiteCount property of each content database to 10,000. ",
        "b": "B. Create one content database. Set the value of the WarningSiteCount property of the content databaseto 25,000.",
        "c": "C. Create one content database. Set the value of the MaxSiteCount property of the content database to 25,000.",
        "d": "D. Create three content databases. Set the value of the MaxSiteCount property of each content databaseto 10,000.",
        "explanation": ""
    },
    {
        "id": 0,
        "source": "certexam",
        "question": "You are managing a SharePoint farm. The SharePoint databases are configured to run on a dedicated instance of Microsoft SQL Server 2008 R2 Service Pack 1. \nYou need to optimize query executions.\nWhat should you do?",
        "answer": ["C"],
        "a": "A. Set the maximum degree of parallelism for SQL Server instances to 4. ",
        "b": "B. Set the maximum degree of parallelism for SQL Server instances to 1. ",
        "c": "C. Move the master database to a RAID 5 volume.",
        "d": "D. Set the maximum degree of parallelism for SQL Server instances to 32.",
        "explanation": "Explanation: The read performance will double with a RAID 10 volume.\nIncorrect:\nnot A, not D: The master database records all the system-level information for a SQL Server system. Thisincludes instance-wide metadata such as logon accounts, endpoints, linked servers, and systemconfiguration settings.\nNot C: This is already the default settings.\n* By default, the Max Degree Of Parallelism setting has a value of 0, which means that the maximumnumber of processors used for parallel processing is controlled automatically. Essentially, SQL Server usesthe actual number of available processors, depending on the workload. To limit the number of processorsused for parallel processing to a set amount (up to the maximum supported by SQL Server), change theMax Degree Of Parallelism setting to a value greater than 1. A value of 1 tells SQL Server not to useparallel processing."
    },
    {
        "id": 0,
        "source": "certexam",
        "question": "You are managing a site collection in a SharePoint farm.You need to configure the minimum level of permissions necessary for users to manage lists in the sitecollection.What permission level should you configure?",
        "answer": ["C"],
        "a": "A. View Only",
        "b": "B. Edit",
        "c": "C. Full Control",
        "d": "D. Read",
        "explanation": ""
    },
    {
        "id": 0,
        "source": "certexam",
        "question": "You are managing a SharePoint environment. All SharePoint databases reside on servers that runMicrosoft SQL Server 2012.You observe an increase in the consumption of disk space by the SharePoint configuration database.You need to minimize disk space usage.Which recovery model should you set?",
        "answer": ["D"],
        "a": "A. Transactional",
        "b": "B. Full",
        "c": "C. Bulk-logged",
        "d": "D. Simple",
        "explanation": ""
    },
    {
        "id": 0,
        "source": "certexam",
        "question": "A SharePoint environment contains a single web application at http://web01.You create a site collection under the web application. The site collection has the URL http://sharepoint.contoso.com.You need to ensure that the site collection is also accessible at http://intranet.contoso.com.What should you do?",
        "answer": ["C"],
        "a": "A. Add intranet.contoso.com as an alternate access mapping for the web application.",
        "b": "B. Extend the web application and add intranet.contoso.com to the Intranet Zone.",
        "c": "C. Run the Set-SPSiteUrl Windows PowerShell cmdlet.",
        "d": "D. Run the New-SPSite Windows PowerShell cmdlet.",
        "explanation": ""
    },

{
    "id": 0,
    "question": " You are attempting to add new keywords to a SharePoint and receive a message that states The Site Does Not Contain A Default Keywords Store. How should you correct this issue?",
    "answer": ["C"],
    "a": "A. Add an enterprise keywords site column to the sites content types.",
    "b": "B. In Central Administration, add an MMS application to the SharePoint farm.",
    "c": "C. Edit the MMS Connection and then select This Service Application Is The Default Storage Location For Keywords.",
    "d": "D. Activate the managed keyword service application in Central Administration.",
    "a_answer": " Incorrect: An enterprise keywords site column is used for keyword storage, but will not cause the error.",
    "b_answer": " Incorrect: Although the MMS is indeed required, additional configuration steps are required.",
    "c_answer": " Correct: A default keywords term store must be selected in the MMS for enterprise keywords to be used.D.",
    "d_answer": " Incorrect: No Managed Keyword Service application exists in SharePoint 2013."
}, {
    "id": 0,
    "question": "2. You want to define a new information policy feature. The legal requirement for the document type requires that you produce and retain physical copies of each document. You want to use a policy feature that will be supported in the next version of SharePoint.Which of the following policy feature types should you choose?",
    "answer": ["B"],
    "a": "A. Retention",
    "b": "B. Bar codes",
    "c": "C. Labels",
    "d": "D. Auditing",
    "a_answer": " Incorrect: The retention policy feature defines the lifecycle of content contained within SharePoint.",
    "b_answer": " Correct: The barcode policy feature is the only feature type that is both supported beyond SharePoint 2013 and useful for tracking physical documents.",
    "c_answer": " Incorrect: The labeling policy feature is a backward-compatible feature that works with printed documents; it is also deprecated, meaning that it will not be available in newer versions of SharePoint (beyond SharePoint 2013).D. Incorrect: The auditing policy feature defines monitoring of user document interactions, such as edits, deletions, and so on.",
    "d_answer": " Incorrect: The auditing policy feature defines monitoring of user document interactions, such as edits, deletions, and so on."
}, {
    "id": 0,
    "question": "3. Within the managed metadata service, you want to designate a set of terms specifically for SharePoint navigation. What selection should you make within the Intended Use tab to accomplish this action?",
    "answer": ["D"],
    "a": "A. Use This Term Set For Managed Navigation",
    "b": "B. Make Term Set Unavailable For Tagging",
    "c": "C. Enable Team Site Navigation",
    "d": "D. Use This Term Set For Site Navigation",
    "a_answer": " Incorrect: Although managed navigation is the goal you are working toward, there is no menu item by this name within the Intended Use tab.",
    "b_answer": " Incorrect: Making a term set unavailable for tagging is an effective way to group terms together (for example, by an alphabetical grouping, such as A), but does not enable the term set for navigation.",
    "c_answer": " Incorrect: There is no option by this name in the Intended Use tab.D. Correct: The correct selection to enable managed navigation, it designates that a particular term set be used explicitly for the navigation of a site (or sites).Objective 1.2: Thought experimentIn order to effectively maintain separation of content, you would most likely need to build a web application that uses separate security credentials and content databases.",
    "d_answer": " Correct: The correct selection to enable managed navigation, it designates that a particular term set be used explicitly for the navigation of a site (or sites).Objective 1.2: Thought experimentIn order to effectively maintain separation of content, you would most likely need to build a web application that uses separate security credentials and content databases. Although this requirement might not by itself preclude the use of host named site collections, the lack of "
}, {
    "id": 0,
    "question": " You want to build a navigational structure in which each site collection can have its own vanity URL. Which site collection designation should be used for the web application?",
    "answer": ["B"],
    "a": "A. Fully qualified domain name (FQDN) site collections",
    "b": "B. Host named site collections",
    "c": "C. Domain named site collections",
    "d": "D. Path-based site collections",
    "a_answer": " Incorrect: Although host named site collections technically use FQDNs in DNS, this is not the correct designation for the site collection.",
    "b_answer": " Correct: Host named site collections allow for the assignment of vanity URLs to each site collection in a web application.",
    "c_answer": " Incorrect: There is no such thing as a domain named site collection.D. Incorrect: Path-based site collections are the alternative to host named site collections.",
    "d_answer": " Incorrect: Path-based site collections are the alternative to host named site collections."
}, {
    "id": 0,
    "question": "2. Which of the following SQL high availability (HA) solutions require configuration in SharePoint content databases?",
    "answer": ["B"],
    "a": "A. SQL log shipping",
    "b": "B. SQL mirroring",
    "c": "C. SQL high availability groups",
    "d": "D. SQL clustering",
    "a_answer": " Incorrect: SharePoint is not aware of content databases replicated via log shipping.",
    "b_answer": " Correct: Each content database in SharePoint can specify an alternative SQL server for use with mirroring.",
    "c_answer": " Incorrect: SharePoint is not aware of SQL availability groups.D. Incorrect: SharePoint is not aware of clustered SQL database servers.\f3. Correct answers: B, DA.",
    "d_answer": " Incorrect: SharePoint is not aware of clustered SQL database servers.\f3. Correct answers: B, DA. Incorrect: The limit of 20 web applications per SharePoint farm is a supported limit.B. Correct: There is a supported limit of 20 web applications per SharePoint farm.C. Incorrect: The limit of 10 application pools per web server in a SharePoint farm is "
}, {
    "id": 0,
    "question": "3. Which of the following statements are true concerning web applications and application pools in a SharePoint environment?",
    "answer": ["B", "D"],
    "a": "A. There is a threshold limit of 20 web applications per SharePoint farm.",
    "b": "B. There is a supported limit of 20 web applications per SharePoint farm.",
    "c": "C. There is a supported limit of 10 application pools per web server in a SharePoint farm.",
    "d": "D. There is a threshold limit of 10 application pools per web server in a SharePoint ",
    "a_answer": " Incorrect: The limit of 20 web applications per SharePoint farm is a supported limit.",
    "b_answer": " Correct: There is a supported limit of 20 web applications per SharePoint farm.",
    "c_answer": " Incorrect: Configuration databases are not supported on NAS storage.D. Incorrect: Service application databases are not supported on NAS storage.2. Correct answer: CA.",
    "d_answer": " Incorrect: Service application databases are not supported on NAS storage.2. Correct answer: CA. Incorrect: There is no such mode in Request Management. Affinity has to do with server load balancing on the web tier.B. Incorrect: An integrated mode server farm handles request management policies "
}, {
    "id": 0,
    "question": " You want to utilize NAS storage within your SharePoint farm. Which of the following components are supported in this configuration?",
    "answer": ["B"],
    "a": "A. Content databases",
    "b": "B. RBS",
    "c": "C. Configuration databases",
    "d": "D. Service application databases",
    "a_answer": " Incorrect: Content databases are not supported on NAS storage.",
    "b_answer": " Correct: RBS is fully supported on NAS storage.",
    "c_answer": " Incorrect: Five servers would allow for load balancing in two of the three tiers.D.",
    "d_answer": " Correct: A six-server farm is the smallest practical design for load balancing in each tier."
}, {
    "id": 0,
    "question": "2. You want to build a server farm specifically intended to handle incoming request management processing duties. Which deployment mode should you choose?",
    "answer": ["C"],
    "a": "A. Affinity mode",
    "b": "B. Integrated mode",
    "c": "C. Dedicated mode",
    "d": "D. Throttling mode",
    "a_answer": " Incorrect: There is no such mode in Request Management.",
    "b_answer": " Incorrect: An integrated mode server farm handles request management policies ",
    "c_answer": " Incorrect: Office 365 ProPlus does not include access to SharePoint Online.D. Correct: Office 365 Enterprise includes access to SharePoint Online.2. Correct answers: A, CA.",
    "d_answer": " Correct: Office 365 Enterprise includes access to SharePoint Online.2. Correct answers: A, CA. Correct: Word Automation Services is not available in any SharePoint Online plan level.B. Incorrect: Excel Calculation Services is included in SharePoint Online.C. Correct: PerformancePoint Services is not available in any SharePoint Online plan "
}, {
    "id": 0,
    "question": "3. The smallest fault-tolerant SharePoint 2013 farm should include how many servers?",
    "answer": ["D"],
    "a": "A. 3 (one in each tier)",
    "b": "B. 4",
    "c": "C. 5",
    "d": "D. 6",
    "a_answer": " Incorrect: Three servers (one in each tier) would not provide any fault tolerance.",
    "b_answer": " Incorrect: Four servers would enable load balancing in two of the three tiers. Although ",
    "c_answer": " Incorrect: Apps controls the installation and configuration of applications installed from the Office App Store. D.",
    "d_answer": " Correct: Quotas are part of the configuration for site collections."
}, {
    "id": 0,
    "question": " Which of the following Office 365 subscriptions include SharePoint Online as a component?",
    "answer": ["B", "D"],
    "a": "A. Office 365 Home Premium",
    "b": "B. Office 365 Small Business Premium",
    "c": "C. Office 365 ProPlus",
    "d": "D. Office 365 Enterprise",
    "a_answer": " Incorrect: Office 365 Home Premium does not include access to SharePoint Online.",
    "b_answer": " Correct: Office 365 Small Business Premium includes access to SharePoint Online.",
    "c_answer": " Correct: Negotiate (Kerberos) is a type of integrated Windows authentication.D.",
    "d_answer": " Correct: NTLM is a type of integrated Windows authentication."
}, {
    "id": 0,
    "question": "2. Which of the following services are not included in SharePoint Online?",
    "answer": ["A", "C"],
    "a": "A. Word Automation Services",
    "b": "B. Excel Calculation Services",
    "c": "C. PerformancePoint Services",
    "d": "D. Visio Graphics Services",
    "a_answer": " Correct: Word Automation Services is not available in any SharePoint Online plan level.",
    "b_answer": " Incorrect: Excel Calculation Services is included in SharePoint Online.",
    "c_answer": " Incorrect: There is no such authentication type.D. Incorrect: FBA is claims-based.3. Correct answers: A, B, DA.",
    "d_answer": " Incorrect: FBA is claims-based.3. Correct answers: A, B, DA. Correct: This S2S configuration is supported.B. Correct: This S2S configuration is supported.C. Incorrect: You cannot use S2S to configure an OAuth relationship between SharePoint "
}, {
    "id": 0,
    "question": "3. Your Office 365 users complain that they cannot share the contents of their site collections with outside partners. Which section of the SharePoint admin center is appropriate for correcting this issue?",
    "answer": ["D"],
    "a": "A. Settings",
    "b": "B. Search",
    "c": "C. Apps",
    "d": "D. Site collections",
    "a_answer": " Incorrect: Settings controls the general settings of your SharePoint Online subscription.",
    "b_answer": " Incorrect: Search controls the configuration of search in your SharePoint Online subscription.",
    "c_answer": " Incorrect: Anonymous authentication cannot be configured at the site collection level.D.",
    "d_answer": " Incorrect: Anonymous authentication cannot be configured at the site level."
}, {
    "id": 0,
    "question": " Which of the following are considered integrated Windows authentication types?",
    "answer": ["C", "D"],
    "a": "A. Basic authentication",
    "b": "B. Forms authentication",
    "c": "C. Kerberos authentication",
    "d": "D. NTLM authentication",
    "a_answer": " Incorrect: Although basic authentication is a Windows authentication type, it is not integrated enabling user names and passwords to be passed through automatically.",
    "b_answer": " Incorrect: Forms authentication relies on ASP.NET and a back-end database to ",
    "c_answer": " Incorrect: If selected, a members group can be created as part of the provisioning process.D.",
    "d_answer": " Incorrect: If selected, an owners group can be created as part of the provisioning process."
}, {
    "id": 0,
    "question": "2. Which of the following authentication types are not claims-based?",
    "answer": ["A"],
    "a": "A. Windows classic authentication",
    "b": "B. NTLM authentication",
    "c": "C. Site collection authentication",
    "d": "D. Forms authentication",
    "a_answer": " Correct: Windows classic is not claims-based, and must be configured from within Windows PowerShell.",
    "b_answer": " Incorrect: NTLM authentication is claims-based.",
    "c_answer": " Incorrect: There is no such cmdlet.D. Correct: People Picker is configured using STSADM.3. Correct answers: B, CA.",
    "d_answer": " Correct: People Picker is configured using STSADM.3. Correct answers: B, CA. Incorrect: You cannot allow anonymous access at the web application level.B. Correct: Anonymous access can be configured for the entire web site.C. Correct: Anonymous access can be configured for lists and libraries."
}, {
    "id": 0,
    "question": "3. Which of the following are supported configurations for S2S?",
    "answer": ["A", "B", "D"],
    "a": "A. SharePoint 2013 to Exchange 2013",
    "b": "B. SharePoint 2013 to Lync 2013",
    "c": "C. SharePoint 2013 to SQL Server 2012",
    "d": "D. SharePoint 2013 to SharePoint 2013",
    "a_answer": " Correct: This S2S configuration is supported.",
    "b_answer": " Correct: This S2S configuration is supported.",
    "c_answer": " Incorrect: The Anonymous policy maintains its own set of permissions.D. Incorrect: There is no such web application policy.Objective 2.3: Thought experimentYou might begin by extending the web application that needs anonymous access using a different URL, which can be exposed through the firewall.",
    "d_answer": " Incorrect: There is no such web application policy.Objective 2.3: Thought experimentYou might begin by extending the web application that needs anonymous access using a different URL, which can be exposed through the firewall."
}, {
    "id": 0,
    "question": "4. At which of the following levels can anonymous authentication be configured in SharePoint?",
    "answer": ["A"],
    "a": "A. Zone",
    "b": "B. Web application",
    "c": "C. Site collection",
    "d": "D. Site",
    "a_answer": " Correct: Anonymous authentication is configured at the zone level only.",
    "b_answer": " Incorrect: Anonymous authentication cannot be configured at the web application level.",
    "c_answer": " Incorrect: There is no such feature.D. Incorrect: Only the Limited-Access User Permission Lockdown mode feature disallows access.",
    "d_answer": " Incorrect: Only the Limited-Access User Permission Lockdown mode feature disallows access."
}, {
    "id": 0,
    "question": " Which of the following default groups is cannot be automatically set up during the provisioning of new SharePoint sites?",
    "answer": ["B"],
    "a": "A. Visitors",
    "b": "B. Authors",
    "c": "C. Members",
    "d": "D. Owners",
    "a_answer": " Incorrect: If selected, a visitors group can be created as part of the provisioning process.",
    "b_answer": " Correct: There is no such default group.",
    "c_answer": " Incorrect: This tier should never be exposed to the Internet and should be behind the DMZ and the back-end firewall.D.",
    "d_answer": " Correct: No SharePoint server should be exposed directly to the Internet without an active firewall."
}, {
    "id": 0,
    "question": "2. Which of the following Windows PowerShell cmdlets is used to configure People Picker?",
    "answer": ["D"],
    "a": "A. Set-PeoplePicker",
    "b": "B. Set-PickerWebControl",
    "c": "C. Get-PeoplePicker",
    "d": "D. None of the above",
    "a_answer": " Incorrect: There is no such cmdlet.",
    "b_answer": " Incorrect: There is no such cmdlet.",
    "c_answer": " Incorrect: SharePoint cannot scan a document as part of a workflow operation.D. Correct: A document can be scanned as part of the download process.4. Correct answers: B, C, DA.",
    "d_answer": " Correct: A document can be scanned as part of the download process.4. Correct answers: B, C, DA. Incorrect: The publishing farm does not need to generate a secure token certificate.B. Correct: The consuming farm must generate a root certificate.C. Correct: The consuming farm must generate a secure token certificate."
}, {
    "id": 0,
    "question": "3. At which levels can you choose to explicitly allow anonymous access (authorization)?",
    "answer": ["B", "C"],
    "a": "A. Web application",
    "b": "B. Web site",
    "c": "C. Lists and libraries",
    "d": "D. Individual item",
    "a_answer": " Incorrect: You cannot allow anonymous access at the web application level.",
    "b_answer": " Correct: Anonymous access can be configured for the entire web site.",
    "c_answer": " Incorrect: Partial answer.D. Correct: All three of these options are available.2. Correct answers: B, CA.",
    "d_answer": " Correct: All three of these options are available.2. Correct answers: B, CA. Incorrect: You cannot delegate administration at the zone level.B. Correct: You can delegate administration at the farm level.C. Correct: You can delegate administration at the farm level."
}, {
    "id": 0,
    "question": "4. Which of the following web application policies is responsible for setting up individual permission levels at the web app level?",
    "answer": ["A"],
    "a": "A. Permission Policy",
    "b": "B. User Policy",
    "c": "C. Anonymous Policy",
    "d": "D. Inheritance Policy",
    "a_answer": " Correct: The Full Control, Full Read, Deny Write, and Deny All permission levels are created within this policy.",
    "b_answer": " Incorrect: The User policy associates individual users or groups with a permission level.",
    "c_answer": " Incorrect: Partial answer.D. Correct: All three of these statements are true.4. Correct answer: CA.",
    "d_answer": " Correct: All three of these statements are true.4. Correct answer: CA. Incorrect: Settings for Web Part connections do not have anything to do with the use of JavaScript in web parts.B. Incorrect: Settings for the Online Web Part Gallery do not have anything to do "
}, {
    "id": 0,
    "question": " Which of the following features can be activated to disable anonymous access to the _layouts folder?",
    "answer": ["A"],
    "a": "A. Limited-Access User Permission Lockdown mode",
    "b": "B. Forms Table Lockdown mode",
    "c": "C. Layouts and Web Services Lockdown mode",
    "d": "D. None of the above",
    "a_answer": " Correct: If activated, this feature disallows access to the _layouts folder structure.",
    "b_answer": " Incorrect: There is no such feature.",
    "c_answer": " Incorrect: There is no such cmdlet.D.",
    "d_answer": " Correct: When used to install the correct features, the Add-WindowsFeature cmdlet will install both the Application Role and Web Server Role."
}, {
    "id": 0,
    "question": "2. In an Internet-facing SharePoint farm, which of the following SharePoint Server tiers does not require protection by a firewall?",
    "answer": ["D"],
    "a": "A. Web tier",
    "b": "B. App tier",
    "c": "C. Data tier",
    "d": "D. None of the above",
    "a_answer": " Incorrect: The web tier servers should, at the very least, be placed behind a front-end, Internet-facing firewall.",
    "b_answer": " Incorrect: This tier should never be exposed to the Internet and should be behind the DMZ and the back-end firewall.",
    "c_answer": " Incorrect: Although you could count the number of cores and manually specify that number as the max degree of parallelism, it would not be the correct value for use with SharePoint.\f292 CHAPTER 3 Install and configure SharePoint farmsD. Incorrect: This setting has nothing to do with the amount of RAM available to a system.",
    "d_answer": " Incorrect: This setting has nothing to do with the amount of RAM available to a system. Although you could count the number of cores and manually specify that number as the max degree of parallelism, it would not be the correct value for use "
}, {
    "id": 0,
    "question": "3. When can a document be scanned by a SharePoint-integrated antivirus solution?",
    "answer": ["A", "D"],
    "a": "A. On upload",
    "b": "B. At the end of a workflow",
    "c": "C. During a workflow",
    "d": "D. On download",
    "a_answer": " Correct: A document can be scanned as part of the upload process.",
    "b_answer": " Incorrect: SharePoint cannot scan a document as part of a workflow operation.",
    "c_answer": " Incorrect: There is no such command.D.",
    "d_answer": " Correct: Regardless of the language wanted, all language packs install using the SharePoint Languagepack.exe command. From that point on, all dialogue is in the "
}, {
    "id": 0,
    "question": "4. Which of the following certificate types is part of establishing a trust between SharePoint farms?",
    "answer": ["B", "C", "D"],
    "a": "A. An STS certificate generated by the publishing farm",
    "b": "B. A root certificate generated from the consuming farm",
    "c": "C. An STS certificate generated from the consuming farm",
    "d": "D. A root certificate generated by the publishing farm",
    "a_answer": " Incorrect: The publishing farm does not need to generate a secure token certificate.",
    "b_answer": " Correct: The consuming farm must generate a root certificate.",
    "c_answer": " Incorrect: There is no such cmdlet.D. Incorrect: There is no such cmdlet.Objective 3.2: Thought experimentSMTP would need to be configured in the SharePoint environment.",
    "d_answer": " Incorrect: There is no such cmdlet.Objective 3.2: Thought experimentSMTP would need to be configured in the SharePoint environment. Due to the sales teams requirements, the drop box e-mail could potentially receive a lot of spam and the occasional "
}, {
    "id": 0,
    "question": " Which of the following options is available for using an RMS server in a SharePoint farm?",
    "answer": ["D"],
    "a": "A. Do Not Use IRM On This Server",
    "b": "B. Use The Default RMS Server Specified In Active Directory",
    "c": "C. Specify An Existing RMS Server",
    "d": "D. All of the above",
    "a_answer": " Incorrect: Partial answer.",
    "b_answer": " Incorrect: Partial answer.",
    "c_answer": " Incorrect: There is no such incoming e-mail scenario in SharePoint.D. Correct: The Advanced scenario routes incoming e-mail first through Exchange before arriving at the SharePoint server.",
    "d_answer": " Correct: The Advanced scenario routes incoming e-mail first through Exchange before arriving at the SharePoint server. This configuration provides all the spam filtering and antivirus benefits Exchange has to offer."
}, {
    "id": 0,
    "question": "2. In a growing SharePoint farm, at what levels might you choose to delegate administration?",
    "answer": ["B", "C"],
    "a": "A. Web application",
    "b": "B. Farm",
    "c": "C. Service application",
    "d": "D. Zone",
    "a_answer": " Incorrect: You cannot delegate administration at the zone level.",
    "b_answer": " Correct: You can delegate administration at the farm level.",
    "c_answer": " Incorrect: The Get-SPServiceApplicationProxy cmdlet is used to retrieve information about a service applications proxy.D.",
    "d_answer": " Incorrect: The Add-SPServiceApplicationProxyGroupMember cmdlet is used to add a new service application proxy to a proxy group."
}, {
    "id": 0,
    "question": "3. Which of the following statements are true concerning managed accounts?",
    "answer": ["D"],
    "a": "A. A system-generated password can be automatically provisioned",
    "b": "B. An administrator can enter a new password",
    "c": "C. An existing password can be used",
    "d": "D. All of the above",
    "a_answer": " Incorrect: Partial answer.",
    "b_answer": " Incorrect: Partial answer.",
    "c_answer": " Incorrect: There is no such command.D.",
    "d_answer": " Correct: The Set-SPDesignerSettings cmdlet is used to administer SPD settings for a given web app."
}, {
    "id": 0,
    "question": "4. Which of the following Web Part security settings has to do with the use of JavaScript in Web Parts?",
    "answer": ["C"],
    "a": "A. Web Part Connections",
    "b": "B. Online Web Part Gallery",
    "c": "C. Scriptable Web Parts",
    "d": "D. None of the above",
    "a_answer": " Incorrect: Settings for Web Part connections do not have anything to do with the use of JavaScript in web parts.",
    "b_answer": " Incorrect: Settings for the Online Web Part Gallery do not have anything to do with the use of JavaScript in web parts.",
    "c_answer": " Correct: The New-SPWOPIBinding cmdlet established the relationship between the SharePoint farm and the Office Web Apps instance. An easy way to remember the order is that the SharePoint farm is always connecting to the Office Web Apps farm.",
    "d_answer": " Incorrect: There is no such cmdlet."
}, {
    "id": 0,
    "question": " Which of the following commands or cmdlets can used to install the Application Server Role and Web Server Role on a new server in preparation for a SharePoint installation?",
    "answer": ["B", "D"],
    "a": "A. Get-SPPreReqInstaller",
    "b": "B. Prerequisiteinstaller.exe",
    "c": "C. Get-ServerRole",
    "d": "D. Add-WindowsFeature",
    "a_answer": " Incorrect: There is no such cmdlet.",
    "b_answer": " Correct: Prerequisiteinstaller.exe is a command line installer from the SharePoint ",
    "c_answer": " Incorrect: The index cannot be cloned.D. Correct: Cloning the search topology enables its alteration; after it is configured, it can become the active topology.",
    "d_answer": " Correct: Cloning the search topology enables its alteration; after it is configured, it can become the active topology."
}, {
    "id": 0,
    "question": "2. What is the proper value in SQL for the max degree of parallelism setting to support a SharePoint installation?",
    "answer": ["B"],
    "a": "A. 0",
    "b": "B. 1",
    "c": "C. Equal to the number of processor cores on the SQL Server",
    "d": "D. Total amount of RAM/number of processor cores on the SQL Server",
    "a_answer": " Incorrect: Setting the max degree of parallelism to 0 causes SQL to use a portion of the available processors to run a single statement (up to 64 total, depending on the edition of SQL server used).B.",
    "b_answer": " Correct: 1 is the proper setting for the max degree of parallelism for use with SharePoint and suppresses parallel plan generation in SQL.C. Incorrect: Although you could count the number of cores and manually specify ",
    "c_answer": " Incorrect: PeopleSoft data is not directly supported as a SharePoint Server 2013 content source, although you may be able to crawl it via BCS.D.",
    "d_answer": " Incorrect: SAP data is not directly supported as a SharePoint Server 2013 content source, although you may be able to crawl it via BCS."
}, {
    "id": 0,
    "question": "3. Which of the following commands can be run to install the Spanish version of the SharePoint language pack?",
    "answer": ["D"],
    "a": "A. Sharepointupdate.exe",
    "b": "B. Prerequisiteinstaller.exe",
    "c": "C. SPLanguagePack.exe",
    "d": "D. Sharepointlanguagepack.exe",
    "a_answer": " Incorrect: There is no such command.",
    "b_answer": " Incorrect: Prerequisiteinstaller.exe downloads and configures SharePoint ",
    "c_answer": " Correct: Continuous crawls cannot be run alongside incremental crawls.D. Incorrect: Full crawls can be run alongside either incremental or continuous crawls.4. Correct answer: BA.",
    "d_answer": " Incorrect: Full crawls can be run alongside either incremental or continuous crawls.4. Correct answer: BA. Incorrect: Disabling the crawls would result in the index becoming stale over time.B. Correct: Increasing the continuous crawl interval would ease the traffic traversing "
}, {
    "id": 0,
    "question": "4. Which of the following tools are used by an Active Directory administrator to create the container for the SCP?",
    "answer": ["B"],
    "a": "A. Active Directory Users and Computers",
    "b": "B. ADSIEdit.exe",
    "c": "C. Get-ADContainer",
    "d": "D. Set-ADContainer",
    "a_answer": " Incorrect: Active Users and Computers is used to administer the Active Directory structure.",
    "b_answer": " Correct: ADSI Edit is used to build the SCP container in Active Directory.",
    "c_answer": " Incorrect: There is no such connection group OOB.D. Incorrect: There is no such connection group OOB.2. Correct answer: CA.",
    "d_answer": " Incorrect: There is no such connection group OOB.2. Correct answer: CA. Incorrect: The term Uncustomized does not describe the status of a published content type.B. Incorrect: The term Customized does not describe the status of a published "
}, {
    "id": 0,
    "question": " Which of the following e-mail scenarios support the prevention of spam filtering and virus prevention through incoming e-mail connectivity to a list or library in SharePoint?",
    "answer": ["D"],
    "a": "A. Basic scenario",
    "b": "B. List scenario",
    "c": "C. Library scenario",
    "d": "D. Advanced scenario",
    "a_answer": " Incorrect: Although a supported scenario, Basic provides no spam filtering or virus protection because incoming e-mail is not routed through an Exchange server.",
    "b_answer": " Incorrect: There is no such incoming e-mail scenario in SharePoint.",
    "c_answer": " Incorrect: The term Sealed does not describe the status of a published content type.D.",
    "d_answer": " Correct: The term Unsealed describes the status of a published content type."
}, {
    "id": 0,
    "question": "2. Which of the following cmdlets is used to create a new proxy group for use with service applications?",
    "answer": ["A"],
    "a": "A. Set-SPServiceApplicationProxyGroup",
    "b": "B. Get-SPServiceApplicationProxyGroup",
    "c": "C. Get-SPServiceApplicationProxy",
    "d": "D. Add-SPServiceApplicationProxyGroupMember",
    "a_answer": " Correct: This cmdlet is the correct one for use in creating a new proxy group.",
    "b_answer": " Incorrect: The Get-SPServiceApplicationProxyGroup cmdlet is used to retrieve a listing of proxy groups.",
    "c_answer": " Correct: The content type gallery within each MMS can provide content type functionality.D.",
    "d_answer": " Correct: The content type gallery within each MMS can provide content type functionality."
}, {
    "id": 0,
    "question": "3. Which of the following is the correct cmdlet to configure SPD settings within a web app?",
    "answer": ["D"],
    "a": "A. Set-SharePointDesigner",
    "b": "B. Set-SPDesigner",
    "c": "C. Set-SharePointDesignerSettings",
    "d": "D. Set-SPDesignerSettings",
    "a_answer": " Incorrect: There is no such cmdlet.",
    "b_answer": " Incorrect: Prerequisiteinstaller.exe downloads and configures SharePoint ",
    "c_answer": " Correct: This directory service is supported.D. Correct: This directory service is supported.E. Incorrect: Not all these directory services are supported.2. Correct answers: A, C, DA.",
    "d_answer": " Correct: This directory service is supported.E. Incorrect: Not all these directory services are supported.2. Correct answers: A, C, DA. Correct: Windows Authentication is supported.B. Incorrect: Basic Authentication is not supported.C. Correct: Forms Authentication is supported."
}, {
    "id": 0,
    "question": "4. Which of the following cmdlets is used to bind an Office Web Apps installation with a SharePoint farm?",
    "answer": ["C"],
    "a": "A. Set-NewWOPIBinding",
    "b": "B. Set-NewSPBinding",
    "c": "C. New-SPWOPIBinding",
    "d": "D. New-WOPISPBinding",
    "a_answer": " Incorrect: There is no such cmdlet.",
    "b_answer": " Incorrect: There is no such cmdlet.",
    "c_answer": " Incorrect: TCP 3389 is used with RDP connections.D. Correct: TCP 389 is used with Active Directory connections.\f4. Correct answer: DA.",
    "d_answer": " Correct: TCP 389 is used with Active Directory connections.\f4. Correct answer: DA. Incorrect: This is only one of the items to check.B. Incorrect: This is only one of the items to check.C. Incorrect: This is only one of the items to check."
}, {
    "id": 0,
    "question": " You want to modify the search topology of your farm. The body of content is quite large and has generated a large index. Which of the following is a required action for this change?",
    "answer": ["D"],
    "a": "A. Mirroring the index",
    "b": "B. Backing up the topology",
    "c": "C. Cloning the index",
    "d": "D. Cloning the topology",
    "a_answer": " Incorrect: The index cannot be mirrored.",
    "b_answer": " Incorrect: There is no way to back up the search topology.",
    "c_answer": " Incorrect: This value does not correspond to any of the effective limits.D. Correct: The supported limit is 20 managed paths per web application; although exceeding this limit is technically possible, it negatively affects performance.",
    "d_answer": " Correct: The supported limit is 20 managed paths per web application; although exceeding this limit is technically possible, it negatively affects performance."
}, {
    "id": 0,
    "question": "2. Which of the following content sources require additional configuration but are directly supported in a standard SharePoint Server 2013 search installation?",
    "answer": ["A", "B"],
    "a": "A. Lotus Notes",
    "b": "B. Documentum",
    "c": "C. PeopleSoft",
    "d": "D. SAP",
    "a_answer": " Correct: Lotus Notes is directly supported as a SharePoint Server 2013 content source.",
    "b_answer": " Correct: Documentum is directly supported as a SharePoint Server 2013 content source.",
    "c_answer": " Correct: The default threshold for the list view lookup is eight fields.D. Incorrect: This value does not correspond to any of the effective limits.3. Correct answer: AA.",
    "d_answer": " Incorrect: This value does not correspond to any of the effective limits.3. Correct answer: AA. Correct: Anonymous authentication is required to see the logon page.B. Incorrect: Basic authentication provides no security.C. Incorrect: Kerberos is not for external use (no access to the Key Distribution "
}, {
    "id": 0,
    "question": "3. Which of the following crawl types cannot be configured on the same content source?",
    "answer": ["B", "C"],
    "a": "A. Differential",
    "b": "B. Incremental",
    "c": "C. Continuous",
    "d": "D. Full",
    "a_answer": " Incorrect: There is no such crawl type in SharePoint Server 2013.B.",
    "b_answer": " Correct: Incremental crawls cannot be run alongside continuous crawls.C. Correct: Continuous crawls cannot be run alongside incremental crawls.",
    "c_answer": " Correct: This setting is required.D. Incorrect: Management of the web site URL structure is not required.\fAnswers CHAPTER 4 397Objective 4.2: Thought experimentIf the administrator is not very comfortable in Windows PowerShell, then he/she would most likely need to stick with path-based site collections, especially if this is a smaller environment.",
    "d_answer": " Incorrect: Management of the web site URL structure is not required.\fAnswers CHAPTER 4 397Objective 4.2: Thought experimentIf the administrator is not very comfortable in Windows PowerShell, then he/she would most likely need to stick with path-based site collections, especially if this is a smaller environment."
}, {
    "id": 0,
    "question": "4. You receive a phone call from the remote site administrator of a small SharePoint server farm whose content you have been crawling. The site has been experiencing connectivity issues that occur only during working hours. Your requirement is that the content be kept as fresh as possible. What actions can you take to correct the issue?",
    "answer": ["B"],
    "a": "A. Disable all crawls",
    "b": "B. Increase the continuous crawl interval",
    "c": "C. Run a full crawl in the evening, but no other crawls",
    "d": "D. Decrease the continuous crawl interval",
    "a_answer": " Incorrect: Disabling the crawls would result in the index becoming stale over time.",
    "b_answer": " Correct: Increasing the continuous crawl interval would ease the traffic traversing the WAN to this content source.",
    "c_answer": " Correct: -HostHeader is the correct switch used to create host header site collections.D.",
    "d_answer": " Incorrect: -HNSC is not a valid switch."
}, {
    "id": 0,
    "question": " Which of the following proxy/connection groups is used for one-off, ad hoc connectivity?",
    "answer": ["A"],
    "a": "A. Custom",
    "b": "B. Default",
    "c": "C. Direct",
    "d": "D. Standby",
    "a_answer": " Correct: The custom connection is used to assign service application connections on a one-off basis.",
    "b_answer": " Incorrect: The default connection is used by default for all connections.",
    "c_answer": " Correct: New Site is the correct link.D. Incorrect: Self Service Site is not the correct link.3. Correct answer: AA.",
    "d_answer": " Incorrect: Self Service Site is not the correct link.3. Correct answer: AA. Correct: A closed site is still available to its members.B. Incorrect: There is no such site type.C. Incorrect: There is no such site type."
}, {
    "id": 0,
    "question": "2. Which of the following terms describes the status of a content type that has been published from the content type hub?",
    "answer": ["C"],
    "a": "A. Uncustomized",
    "b": "B. Customized",
    "c": "C. Sealed",
    "d": "D. Unsealed",
    "a_answer": " Incorrect: The term Uncustomized does not describe the status of a published content type.",
    "b_answer": " Incorrect: The term Customized does not describe the status of a published content type.",
    "c_answer": " Correct: Outlook Web Access presents the team mailbox in the SharePoint site.D. Incorrect: Although this should be configured for the farm, it is not a component of team mailboxes.",
    "d_answer": " Incorrect: Although this should be configured for the farm, it is not a component of team mailboxes."
}, {
    "id": 0,
    "question": "3. Which of the following terms describes the status of a content type that has been unpublished from the content type hub?",
    "answer": ["D"],
    "a": "A. Uncustomized",
    "b": "B. Customized\f",
    "c": "C. Sealed",
    "d": "D. Unsealed",
    "a_answer": " Incorrect: The term Uncustomized does not describe the status of a published content type.",
    "b_answer": " Incorrect: The term Customized does not describe the status of a published content type.",
    "c_answer": " Incorrect: Business Connectivity Services is not required for site access requests.D. Incorrect: User Profile Services is not required for site access requests.2. Correct answers: B, CA.",
    "d_answer": " Incorrect: User Profile Services is not required for site access requests.2. Correct answers: B, CA. Incorrect: Although you can enable authentication at the web application level, you cannot provide authorization at this level.B. Correct: Sites and site collections can be secured for anonymous access.C. Correct: Individual lists and libraries can be secured for anonymous access."
}, {
    "id": 0,
    "question": "4. Which of the following MMS Connection options should be enabled for web applications that are already attached to another fully configured MMS Connection?",
    "answer": ["C", "D"],
    "a": "A. This Service Application Is The Default Storage Location For Keywords",
    "b": "B. This Service Application Is The Default Storage Location For Column Specific Term Sets",
    "c": "C. Consumes Content Types From The Content Type Gallery",
    "d": "D. Push-down Content Type Publishing Updates From The Content Type Gallery To ",
    "a_answer": " Incorrect: Only one connected MMS should be the default storage location for keywords.",
    "b_answer": " Incorrect: Only one connected MMS should be the default storage location for column-specific term sets.",
    "c_answer": " Correct: You can configure security inheritance at the individual lists and libraries level.D.",
    "d_answer": " Correct: You can configure security inheritance at the individual item level."
}, {
    "id": 0,
    "question": " Which of the following directory services are supported for use with SharePoint 2013?",
    "answer": ["B", "C", "D"],
    "a": "A. Active Directory Domain Services 2000",
    "b": "B. Sun Java System Directory Server 5.2",
    "c": "C. Novell eDirectory version 8.7.3",
    "d": "D. IBM Tivoli version 5.2E. All of the above",
    "a_answer": " Incorrect: Active Directory Domain Services 2003 SP2 is the minimum level required for use with SharePoint 2013.B.",
    "b_answer": " Correct: This directory service is supported.C. Correct: This directory service is supported.",
    "c_answer": " Correct: Limited Access cannot be altered (grayed-out).D. Incorrect: Read can be altered.Objective 4.4: Thought experimentYou might start by building a new result source that is capable of selecting just a single type of file. Next, you could create a query rule that returns a particular result set that includes the file type you chose.",
    "d_answer": " Incorrect: Read can be altered.Objective 4.4: Thought experimentYou might start by building a new result source that is capable of selecting just a single type of file. Next, you could create a query rule that returns a particular result set that includes the file type you chose."
}, {
    "id": 0,
    "question": "2. Which of the following authentication types is supported for use with SharePoint Active Directory import?",
    "answer": ["A", "C", "D"],
    "a": "A. Windows authentication",
    "b": "B. Basic authentication",
    "c": "C. Forms authentication",
    "d": "D. Trusted Claims Provider authentication",
    "a_answer": " Correct: Windows Authentication is supported.",
    "b_answer": " Incorrect: Basic Authentication is not supported.",
    "c_answer": " Incorrect: Partial answer  OpenSearch is one of the available protocols.D. Correct: All three of these protocols can be used with a result source in a SharePoint farm.",
    "d_answer": " Correct: All three of these protocols can be used with a result source in a SharePoint farm."
}, {
    "id": 0,
    "question": "3. Which is the correct TCP port used with Active Directory imports?",
    "answer": ["D"],
    "a": "A. TCP 1433",
    "b": "B. TCP 80",
    "c": "C. TCP 3389",
    "d": "D. TCP 389",
    "a_answer": " Incorrect: TCP 1433 is used with SQL Server default connections.",
    "b_answer": " Incorrect: TCP 80 is used with HTTP connections.",
    "c_answer": " Correct: Query rules can be configured at the web application level.D. Incorrect: Only answers B and C are correct.3. Correct answer: CA.",
    "d_answer": " Incorrect: Only answers B and C are correct.3. Correct answer: CA. Incorrect: This folder does not house the display templates.B. Incorrect: This folder does not house the display templates.C. Correct: The System folder houses the display folders for result types."
}, {
    "id": 0,
    "question": "4. You have an audience that is working, but it displays stale or incomplete expected membership information. Which of the following items should you check?",
    "answer": ["D"],
    "a": "A. Audience rules",
    "b": "B. Timer job for the synchronization service",
    "c": "C. Compilation schedule",
    "d": "D. All of the above",
    "a_answer": " Incorrect: This is only one of the items to check.",
    "b_answer": " Incorrect: This is only one of the items to check.",
    "c_answer": " Correct: Filters are not an available option for configuration within the search service application.D.",
    "d_answer": " Incorrect: Crawled properties is an available option."
}, {
    "id": 0,
    "question": " What is the supported maximum number of managed paths for use in a SharePoint web application?",
    "answer": ["D"],
    "a": "A. 5",
    "b": "B. 100",
    "c": "C. 35",
    "d": "D. 20",
    "a_answer": " Incorrect: This value does not correspond to any of the effective limits.",
    "b_answer": " Incorrect: This value does not correspond to any of the effective limits.",
    "c_answer": " Correct: The Intended Use tab allows for the configuration of term sets for navigational use.D.",
    "d_answer": " Incorrect: The Custom Properties tab cannot be used to configure term sets for navigational use."
}, {
    "id": 0,
    "question": "2. Which of the following values is the default maximum List View Lookup Threshold?",
    "answer": ["C"],
    "a": "A. 5,000",
    "b": "B. 20,000",
    "c": "C. 8",
    "d": "D. 2,500",
    "a_answer": " Incorrect: This is the maximum list view threshold.",
    "b_answer": " Incorrect: This is the maximum list view threshold for administrators and auditors.",
    "c_answer": " Correct: Valid scope.D. Incorrect: Only the Shared and Local properties scopes are valid for custom properties.",
    "d_answer": " Incorrect: Only the Shared and Local properties scopes are valid for custom properties."
}, {
    "id": 0,
    "question": "3. Which of the following authentication methods is required for use with FBA?",
    "answer": ["A"],
    "a": "A. anonymous",
    "b": "B. basic",
    "c": "C. Kerberos",
    "d": "D. SAML",
    "a_answer": " Correct: Anonymous authentication is required to see the logon page.",
    "b_answer": " Incorrect: Basic authentication provides no security.",
    "c_answer": " Incorrect: Cannot create a search refiner.D. Correct: Search refiners can be configured from within a Web Part.4. Correct answers: CA.",
    "d_answer": " Correct: Search refiners can be configured from within a Web Part.4. Correct answers: CA. Incorrect: List refiners cannot be configured at the site level.B. Incorrect: List refiners cannot be configured at the site collection level.C. Correct: List refiners are configured at the list or library level."
}, {
    "id": 0,
    "question": "4. Which of the following settings are required to enable a designer to build a new page layout using SPD?",
    "answer": ["B", "C"],
    "a": "A. Enable Detaching Pages From The Site Definition",
    "b": "B. Enable Customizing Master Pages And Layout Pages",
    "c": "C. Enable SharePoint Designer",
    "d": "D. Enable Managing Of The Web Site URL Structure",
    "a_answer": " Incorrect: Detaching pages is not required.",
    "b_answer": " Correct: This setting is required.",
    "c_answer": " Incorrect: Service application databases cannot be configured within a data collector set.D.",
    "d_answer": " Correct: System configuration information is a selection within the data collector set."
}, {
    "id": 0,
    "question": " Which of the following switches is required for use in creating host header site collections in Windows PowerShell?",
    "answer": ["C"],
    "a": "A. -HostNamed",
    "b": "B. -HostHeaderSite",
    "c": "C. -HostHeader",
    "d": "D. -HNSC",
    "a_answer": " Incorrect: -HostNamed is not a valid switch.",
    "b_answer": " Incorrect: -HostHeaderSite is not a valid switch.",
    "c_answer": " Incorrect: Each content database can be associated with only one web application.D. Incorrect: Each content database can be associated with only one web application.\fAnswers CHAPTER 5 4853. Correct answer: DA.",
    "d_answer": " Incorrect: Each content database can be associated with only one web application.\fAnswers CHAPTER 5 4853. Correct answer: DA. Incorrect: Get-SPSiteCollection is not a valid Windows PowerShell cmdlet for use with SharePoint.B. Incorrect: Get-SPDatabase webapplication is used to display the content databases "
}, {
    "id": 0,
    "question": "2. Which of the following links is used from My Site to create a new SSSC?",
    "answer": ["C"],
    "a": "A. My Site",
    "b": "B. Team Site",
    "c": "C. New Site",
    "d": "D. Self Service Site",
    "a_answer": " Incorrect: The link is contained within a My Site.",
    "b_answer": " Incorrect: Team Site is not the correct link.",
    "c_answer": " Correct: RAID 5 provides good read performance, effective redundancy, and also provides the best economy.D.",
    "d_answer": " Incorrect: RAID 10 offers good performance and redundancy, but does not provide the best economy."
}, {
    "id": 0,
    "question": "3. Which of the following terms describes a site that is no longer made available via aggregation but is still available to its members?",
    "answer": ["A"],
    "a": "A. Closed",
    "b": "B. Offline",
    "c": "C. Unpublished",
    "d": "D. Dormant",
    "a_answer": " Correct: A closed site is still available to its members.",
    "b_answer": " Incorrect: There is no such site type.",
    "c_answer": " Correct: TempDB Files and transaction logs would make the best use of this storage from a performance perspective.D.",
    "d_answer": " Incorrect: Database data files would benefit from the performance gain, but would not provide the best use from a performance perspective."
}, {
    "id": 0,
    "question": "4. Which of the following Microsoft technologies is required for site mailboxes to be used?",
    "answer": ["A", "C"],
    "a": "A. Microsoft Exchange",
    "b": "B. Office web applications",
    "c": "C. Outlook Web Access",
    "d": "D. Outgoing e-mail",
    "a_answer": " Correct: Exchange provides the back-end mail store.",
    "b_answer": " Incorrect: Office Web Applications is not a required technology.",
    "c_answer": " Incorrect: SQLIOSim is used for simulating SQL IO patterns.D. Incorrect: IOMeter is an open source tool that is used to test performance capacity with multiple I/O types at one time.",
    "d_answer": " Incorrect: IOMeter is an open source tool that is used to test performance capacity with multiple I/O types at one time."
}, {
    "id": 0,
    "question": " Which of the following services is required for use in configuring site access requests?",
    "answer": ["B"],
    "a": "A. Inbound email",
    "b": "B. Outbound email",
    "c": "C. Business Connectivity Services",
    "d": "D. User Profile Services",
    "a_answer": " Incorrect: Inbound e-mail is not required for site access requests.",
    "b_answer": " Correct: Outbound e-mail is sent via the SharePoint system to the designated e-mail address for approval requests.",
    "c_answer": " Incorrect: Disabled indicates that no caching will take place.D. Correct: This cache profile is optimized for sites in which authoring, customization, and other write-intensive operations take place.",
    "d_answer": " Correct: This cache profile is optimized for sites in which authoring, customization, and other write-intensive operations take place."
}, {
    "id": 0,
    "question": "2. Which of the following items can be individually secured for anonymous access?",
    "answer": ["B", "C"],
    "a": "A. Web application",
    "b": "B. Site or site collection",
    "c": "C. Individual lists and libraries",
    "d": "D. Individual items",
    "a_answer": " Incorrect: Although you can enable authentication at the web application level, you cannot provide authorization at this level.",
    "b_answer": " Correct: Sites and site collections can be secured for anonymous access.",
    "c_answer": " Correct: Event logs are not generally part of gathering a performance baseline.D. Incorrect: Creating a PerfMon schedule is part of collecting a performance baseline.",
    "d_answer": " Incorrect: Creating a PerfMon schedule is part of collecting a performance baseline."
}, {
    "id": 0,
    "question": "3. At which of the following levels can you configure security inheritance?",
    "answer": ["B", "C", "D"],
    "a": "A. Web application",
    "b": "B. Site or site collection",
    "c": "C. Individual lists and libraries",
    "d": "D. Individual items",
    "a_answer": " Incorrect: You cannot configure security inheritance at the web application level.",
    "b_answer": " Correct: You can configure security inheritance at the site or site collection level.",
    "c_answer": " Correct: BCS provide for client-side tracing.D. Incorrect: InfoPath Services do not provide for client-side tracing.\f3. Correct answer: AA.",
    "d_answer": " Incorrect: InfoPath Services do not provide for client-side tracing.\f3. Correct answer: AA. Correct: SSMS interaction is supported only with the logging database.B. Incorrect: Direct interaction with the User Profile Sync database is not supported.C. Incorrect: Direct interaction with the Search database is not supported."
}, {
    "id": 0,
    "question": "4. Which of the following permission groups cannot have its permissions altered?",
    "answer": ["A", "C"],
    "a": "A. Full Control",
    "b": "B. Contribute",
    "c": "C. Limited Access",
    "d": "D. Read",
    "a_answer": " Correct: Full Control cannot be altered (grayed-out).B.",
    "b_answer": " Incorrect: Contribute can be altered.C. Correct: Limited Access cannot be altered (grayed-out).",
    "c_answer": "g",
    "d_answer": "h"
}, {
    "id": 0,
    "question": " Which of the following protocols can be used within a result source?",
    "answer": ["D"],
    "a": "A. SharePoint",
    "b": "B. Exchange",
    "c": "C. OpenSearch",
    "d": "D. All of the above",
    "a_answer": " Incorrect: Partial answer  SharePoint is one of the available protocols.",
    "b_answer": " Incorrect: Partial answer  Exchange is one of the available protocols.",
    "c_answer": "g",
    "d_answer": "h"
}, {
    "id": 0,
    "question": "2. At which of the following levels can you configure query rules?",
    "answer": ["B", "C"],
    "a": "A. Search service application",
    "b": "B. Site or site collection",
    "c": "C. Web application",
    "d": "D. All of the above",
    "a_answer": " Incorrect: You cannot configure query rules at the search service application level.",
    "b_answer": " Correct: Query rules can be configured at the site or site collection level.",
    "c_answer": "g",
    "d_answer": "h"
}, {
    "id": 0,
    "question": "3. Which of the following folders houses the display templates for result types?",
    "answer": ["C"],
    "a": "A. Filters",
    "b": "B. Search",
    "c": "C. System",
    "d": "D. Content Web Parts",
    "a_answer": " Incorrect: This folder does not house the display templates.",
    "b_answer": " Incorrect: This folder does not house the display templates.",
    "c_answer": "g",
    "d_answer": "h"
}, {
    "id": 0,
    "question": "4. Which of the following options is not available within the search service application for configuration?",
    "answer": ["C"],
    "a": "A. Managed properties",
    "b": "B. Categories",
    "c": "C. Filters",
    "d": "D. Crawled properties",
    "a_answer": " Incorrect: Managed properties is an available option.",
    "b_answer": " Incorrect: Categories is an available option.",
    "c_answer": "g",
    "d_answer": "h"
}, {
    "id": 0,
    "question": " Which of the following tabs within the Term Set Management Tool is used to configure a term set for navigation?",
    "answer": ["C"],
    "a": "A. General",
    "b": "B. Term-Driven Pages",
    "c": "C. Intended Use",
    "d": "D. Custom Properties",
    "a_answer": " Incorrect: The General tab cannot be used to configure term sets for navigational use.",
    "b_answer": " Incorrect: The Term-Driven Pages tab cannot be used to configure term sets for navigational use.",
    "c_answer": "g",
    "d_answer": "h"
}, {
    "id": 0,
    "question": "2. Which of the following are valid scopes for custom properties?",
    "answer": ["A", "C"],
    "a": "A. Shared properties",
    "b": "B. Indexed properties",
    "c": "C. Local properties",
    "d": "D. All of the above",
    "a_answer": " Correct: Valid scope.",
    "b_answer": " Incorrect: The Indexed properties scope is not valid for custom properties.",
    "c_answer": "g",
    "d_answer": "h"
}, {
    "id": 0,
    "question": "3. In which of the following can you configure a Search Refiner?",
    "answer": ["A", "D"],
    "a": "A. Term store",
    "b": "B. Navigation tab",
    "c": "C. Custom properties",
    "d": "D. Web part",
    "a_answer": " Correct: Search refiners can be configured from within the Term Store.",
    "b_answer": " Incorrect: Cannot create a search refiner.",
    "c_answer": "g",
    "d_answer": "h"
}, {
    "id": 0,
    "question": "4. At which of the following levels can list refiners be configured?",
    "answer": ["C"],
    "a": "A. Site level",
    "b": "B. Site collection level",
    "c": "C. List or library level",
    "d": "D. Term Store level",
    "a_answer": " Incorrect: List refiners cannot be configured at the site level.",
    "b_answer": " Incorrect: List refiners cannot be configured at the site collection level.",
    "c_answer": "g",
    "d_answer": "h"
}, {
    "id": 0,
    "question": " Which of the following can be configured within a data collector set?",
    "answer": ["A", "B", "D"],
    "a": "A. Performance counters",
    "b": "B. Event trace data",
    "c": "C. Service application databases",
    "d": "D. System configuration information",
    "a_answer": " Correct: Performance counters is a selection within the data collector set.",
    "b_answer": " Correct: Event trace data is a selection within the data collector set.",
    "c_answer": "g",
    "d_answer": "h"
}, {
    "id": 0,
    "question": "2. How many web applications can be associated with a single content database in SharePoint?",
    "answer": ["B"],
    "a": "A. 0",
    "b": "B. 1",
    "c": "C. 2000",
    "d": "D. 5000",
    "a_answer": " Incorrect: A content database always belongs to a web application for it to be functional with SharePoint.",
    "b_answer": " Correct: A web application can host many content databases, but a content database can been associated only with a single web application.",
    "c_answer": "g",
    "d_answer": "h"
}, {
    "id": 0,
    "question": "3. Which of the following should you use to monitor the size of a single site within a site collection?",
    "answer": ["D"],
    "a": "A. $site=Get-SPSiteCollection$site.usage",
    "b": "B. Get-SPDatabase -webapplication",
    "c": "C. Site settings, site collection administration, storage metrics",
    "d": "D. $site=get-spsite identity http://\u003curl\u003e$site.usage",
    "a_answer": " Incorrect: Get-SPSiteCollection is not a valid Windows PowerShell cmdlet for use with SharePoint.",
    "b_answer": " Incorrect: Get-SPDatabase webapplication is used to display the content databases that are associated with a particular web application.",
    "c_answer": "g",
    "d_answer": "h"
}, {
    "id": 0,
    "question": " You are building an Internet-facing publishing portal. Content will be infrequently added to this portal, but the majority of activity will be read-heavy. Which storage level offers the most cost-efficiencies while also providing the best performance characteristics and a layer of redundancy?",
    "answer": ["C"],
    "a": "A. RAID 0",
    "b": "B. RAID 1",
    "c": "C. RAID 5",
    "d": "D. RAID 10",
    "a_answer": " Incorrect: RAID 0 has excellent performance, but provides absolutely no redundancy.",
    "b_answer": " Incorrect: RAID 1 offers good performance and redundancy, but does not provide the best economy.",
    "c_answer": "g",
    "d_answer": "h"
}, {
    "id": 0,
    "question": "2. You have a limited amount of RAID 10 storage available due to expense. Because you are configuring the SQL data tier of the SharePoint farm, you must decide how best to utilize this fast storage. Which of the following database groupings makes the best use of RAID 10 storage?",
    "answer": ["C"],
    "a": "A. Database transaction log files",
    "b": "B. Search databases",
    "c": "C. TempDB files and transaction logs",
    "d": "D. Database data files",
    "a_answer": " Incorrect: Database transaction logs would not provide the best use, although performance would improve.",
    "b_answer": " Incorrect: Search databases can make very good use of this storage, but would not provide the best use from a performance perspective.",
    "c_answer": "g",
    "d_answer": "h"
}, {
    "id": 0,
    "question": "3. Which of the following current tools cannot be used to estimate the capacity of a SQL 2008/2012 storage subsystem?",
    "answer": ["B"],
    "a": "A. SQLIO",
    "b": "B. SQLIOStress",
    "c": "C. SQLIOSim",
    "d": "D. IOMeter",
    "a_answer": " Incorrect: SQLIO is used for testing performance capacity, one I/O type at a time.",
    "b_answer": " Correct: SQLIOStress is an older performance tool that was replaced by SQLIOSim.",
    "c_answer": "g",
    "d_answer": "h"
}, {
    "id": 0,
    "question": "4. Which of the following ASP.NET cache profiles should be used for a collaborative site?",
    "answer": ["D"],
    "a": "A. Extranet",
    "b": "B. Public Internet",
    "c": "C. Disabled",
    "d": "D. Intranet",
    "a_answer": " Incorrect: This cache profile is optimized for a site in which users are authenticated, but no authoring or web part changes take place.",
    "b_answer": " Incorrect: This cache profile is optimized for anonymous users who receive the same content.",
    "c_answer": "g",
    "d_answer": "h"
}, {
    "id": 0,
    "question": " Which of the following actions are not steps of collecting a performance baseline?",
    "answer": ["C"],
    "a": "A. Building a data collector set",
    "b": "B. Choosing a log storage location",
    "c": "C. Checking the application event logs",
    "d": "D. Creating a PerfMon schedule",
    "a_answer": " Incorrect: Building a data collector set is part of collecting a performance baseline.",
    "b_answer": " Incorrect: Choosing a log storage location is part of collecting a performance baseline.",
    "c_answer": "g",
    "d_answer": "h"
}, {
    "id": 0,
    "question": "2. Which of the following SharePoint services can benefit from client-side tracing?",
    "answer": ["C"],
    "a": "A. User Profile Services",
    "b": "B. Search Services",
    "c": "C. BCS",
    "d": "D. InfoPath Services",
    "a_answer": " Incorrect: User Profile Services do not provide for client-side tracing.",
    "b_answer": " Incorrect: Search Services do not provide for client-side tracing.",
    "c_answer": "g",
    "d_answer": "h"
}, {
    "id": 0,
    "question": "3. SSMS interaction with which of the following SharePoint databases is supported?",
    "answer": ["A"],
    "a": "A. Logging",
    "b": "B. User Profile Sync",
    "c": "C. Search",
    "d": "D. BDC",
    "a_answer": " Correct: SSMS interaction is supported only with the logging database.",
    "b_answer": " Incorrect: Direct interaction with the User Profile Sync database is not supported.",
    "c_answer": "g",
    "d_answer": "h"
}];
