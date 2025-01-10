// services.js

const services = [
  {
    videoSource: "/fit/public/matrix.mp4",
    title: "Information Security",
    subtitle:
      "Information Security Solutions protect sensitive data with firewalls, encryption, and intrusion detection, helping organisations mitigate risks and secure digital assets.",
    subservices: [
      {
        name: "Next Generation Firewall – Perimeter / Internal​",
        description:
          "A Next Generation Firewall (NGFW) offers advanced security by integrating traditional firewall capabilities with ",
      },
      {
        name: "Network Segmentation / Access Control​",
        description:
          "Network segmentation and access control are crucial strategies for enhancing cybersecurity. Network segmentation involves dividing a network into smaller, isolated segments to limit the spread of threats and improve performance. This approach helps contain potential breaches, ensuring that compromised areas do not affect the entire network. Access control, on the other hand, regulates who can access specific network resources based on predefined policies. By implementing robust access control mechanisms, organizations can ensure that only authorized users and devices can access sensitive information, reducing the risk of unauthorized access and data breaches. Together, these strategies fortify network defenses and enhance overall security. ",
      },
      {
        name: "Privilege Access Management (PAM)​",
        description:
          "Privilege Access Management (PAM) is a critical cybersecurity practice focused on controlling and monitoring access to critical systems and sensitive information by privileged users. PAM solutions enforce the principle of least privilege, ensuring that users have only the minimum necessary access rights for their roles. This reduces the risk of insider threats and limits the potential damage from compromised credentials. PAM systems typically include features such as session monitoring, credential vaulting, and automated password management. By implementing PAM, organizations can safeguard against unauthorized access, enhance compliance with regulatory standards, and significantly improve their overall security posture.",
      },
      {
        name: "Security Incidents & Event Management (SIEM)​​​",
        description:
          "Security Incidents and Event Management (SIEM) systems are essential for modern cybersecurity operations. SIEM solutions aggregate and analyze activity from various sources across an organization’s IT infrastructure in real-time. By correlating data from logs, network traffic, and user behavior, SIEM systems can detect anomalies, identify potential threats, and generate alerts for security teams. These tools provide comprehensive visibility into security incidents, enabling swift response and remediation. Additionally, SIEM solutions support compliance efforts by maintaining detailed records of security events. By leveraging advanced analytics and automation, SIEM enhances an organization’s ability to prevent, detect, and respond to cyber threats effectively.",
      },
      {
        name: "Secure Access Service Edge (SASE)​​​",
        description:
          "Secure Access Service Edge (SASE) is a cybersecurity framework that integrates wide-area networking (WAN) and network security services into a single cloud-based service model. SASE solutions deliver secure access to applications and data regardless of the user’s location, enabling a seamless and secure connection for remote and on-premises workers. By combining features like secure web gateways, cloud access security brokers, firewall-as-a-service, and zero trust network access, SASE ensures robust security and optimal network performance. This approach simplifies network management, reduces costs, and enhances the ability to adapt to the evolving security landscape, providing comprehensive protection for modern digital enterprises.",
      },
      {
        name: "Firewall Policy Manager​​​",
        description:
          "A Firewall Policy Manager is a critical tool for maintaining and optimizing firewall rules and policies within an organization’s network. It provides a centralized platform for creating, managing, and auditing firewall policies, ensuring they align with security best practices and compliance requirements. By automating policy management, it reduces the risk of human error and improves efficiency. The Firewall Policy Manager helps identify redundant or conflicting rules, streamlining policy enforcement and enhancing network performance. It also offers visibility into policy changes and their impact, enabling better decision-making and proactive threat mitigation. Ultimately, it strengthens an organization’s security posture by ensuring robust and consistent firewall configurations.",
      },
      {
        name: "Network / Server Load Balancer​​​",
        description:
          "A Network/Server Load Balancer is a vital component for optimizing the distribution of incoming network traffic across multiple servers or resources. By evenly spreading the load, it ensures high availability, reliability, and performance of applications and services. Load balancers can operate at various levels, such as the network (Layer 4) or application (Layer 7) layer, to make intelligent routing decisions based on predefined algorithms, such as round-robin or least connections. This not only prevents server overload and reduces response times but also enhances fault tolerance by rerouting traffic from failed servers to healthy ones, ensuring continuous service delivery and improved user experience.",
      },
    ],
    details:
      "We help businesses create and implement cutting-edge strategies to innovate and stay ahead of the competition.",
  },
  {
    videoSource: "/fit/public/circuit3.mp4",
    title: "Consultancy Service",
    subtitle:
      "IT consultancy offers expert guidance, optimizing infrastructure, enhancing efficiency, reducing costs, and providing ongoing support for business goals.",
    subservices: [
      // {
      //   name: "Next Generation Firewall – Perimeter / Internal​",
      //   description:
      //     "A Next Generation Firewall (NGFW) offers advanced security by integrating traditional firewall capabilities with ",
      // },
    ],
    details:
      "Our cybersecurity solutions safeguard your organization from evolving threats and vulnerabilities.",
  },
  {
    videoSource: "/fit/public/cyber.mp4",
    title: "Cyber Security",
    subtitle:
      "FIT offers expert cybersecurity services to protect and enhance your organization’s digital infrastructure and resilience.",
    subservices: [
      {
        name: "Cloud Security Posture​ Assessment​",
        description:
          "The Cloud Security Posture Assessment (CSPA) is a thorough evaluation designed to scrutinize and improve the security framework of your cloud infrastructure. This service identifies vulnerabilities, misconfigurations, and potential threats, ensuring your cloud environment is secure and compliant with industry standards.",
      },
      {
        name: "Vulnerability Assessments & Penetration Testing​",
        description:
          "Our services in Vulnerability Assessments & Penetration Testing provide a detailed examination of your digital infrastructure to identify and fortify potential security weaknesses. By understanding and mitigating vulnerabilities, we help strengthen your organization’s resilience against cyber threats.",
      },
      {
        name: "Security Analytics & Reporting (MS365 Azure)​",
        description:
          "Our Security Analytics & Reporting service for MS365 and Azure environments offers comprehensive insights into your security landscape. Utilizing advanced analytics tools, we provide real-time visibility into potential threats, user activities, and system vulnerabilities.",
      },
      {
        name: "Security Policy & Procedure Development​",
        description:
          "We offer tailored Security Policy & Procedure Development services to enhance your organization’s cybersecurity framework. Our customized policies and procedures ensure alignment with industry standards and regulatory requirements, covering all aspects of data protection, access controls, and incident response.",
      },
      {
        name: "Security Audit & Compliance​",
        description:
          "Our Security Audit & Compliance service ensures your organization’s cybersecurity measures meet industry standards and regulatory requirements. We provide detailed assessments and actionable recommendations to enhance your security posture and ensure compliance.",
      },
      {
        name: "Cyber Incident Response & Emergency Support​",
        description:
          "Our Cyber Incident Response & Emergency Support service offers rapid and decisive action in the event of a cybersecurity incident. We provide comprehensive support to contain and remediate incidents, ensuring swift recovery and enhanced future defences.",
      },
      {
        name: "End User Security Assessment​",
        description:
          "Our End User Security Assessment focuses on the human element of the cybersecurity. By evaluating and improving security awareness among your workforce, we help reduce susceptibility to social engineering attacks and enhance overall security resilience.",
      },
      {
        name: "FIT Cybersecurity Awareness​",
        description:
          "FIT offers a comprehensive Cybersecurity Awareness Training program designed to empower your workforce with the knowledge and skills needed to combat cyber threats. Our interactive sessions cover essential topics such as recognizing phishing attacks, practicing safe online habits, and understanding incident response protocols. Delivered through on-site workshops, online modules, and webinars, our training ensures flexibility and accessibility for all employees. By fostering a culture of security awareness, we help reduce the risk of cyber incidents, enhance compliance with regulations, and improve overall organizational resilience. Partner with FIT to protect your digital assets and build a vigilant, informed workforce. ",
      },
      {
        name: "Consultation & Advisory​",
        description:
          "Our Cybersecurity Consultation & Advisory service provides strategic guidance to improve your cybersecurity posture. We offer tailored recommendations and support to address your organization’s unique security challenges, ensuring effective risk management and regulatory compliance.",
      },
    ],
    sub2: [
      {
        name: "Centralized Event Log Management Monitoring & Response​",
        description:
          "Our service provides centralized management of event logs, ensuring real-time monitoring and response to potential security incidents. This proactive approach helps minimize the impact of threats and enhances overall security.",
      },
      {
        name: "Email Security & Protection​",
        description:
          "We offer robust email security solutions to protect your organization against email-based threats such as phishing and malware. Our multi-layered approach ensures secure communication channels and compliance with industry regulations.",
      },
      {
        name: "Endpoint Security & Protection​",
        description:
          "Our Endpoint Security & Protection service ensures the safety of your organization’s devices and data. Utilizing advanced technologies, we protect against malware and other threats, providing continuous monitoring and threat detection.",
      },
      {
        name: "Firewall Management & Monitoring (IDS/IPS)​",
        description:
          "Our Firewall Management & Monitoring service includes IDS/IPS to secure your network perimeter. We provide comprehensive management and real-time monitoring to detect and prevent unauthorized access and malicious activities.",
      },
      {
        name: "Managed Cloud Security​",
        description:
          "We offer Managed Cloud Security services to safeguard your cloud infrastructure. Our tailored approach ensures compliance with industry standards and provides robust protection for your cloud-based assets.",
      },
      {
        name: "Identity & Access Management (IAM)​",
        description:
          "Our IAM solution provides a secure framework for managing user identities and access controls. We implement advanced technologies to ensure efficient and secure user access, protecting against unauthorized access and potential breaches.",
      },
      {
        name: "Vulnerability Management (Includes Scanning & Remediation)​",
        description:
          "Our Vulnerability Management service encompasses comprehensive scanning and remediation efforts. We identify and address vulnerabilities to fortify your organization against potential cyber threats, ensuring a robust defence.",
      },
    ],
    sub3: [
      {
        name: "Empowering Your Workforce with Cybersecurity Knowledge​",
        description:
          "In today’s digital age, human error remains one of the most significant vulnerabilities in cybersecurity. At FIT, we recognize that a well-informed workforce is the first line of defense against cyber threats. Our Cybersecurity Awareness Training program is meticulously designed to equip your employees with the knowledge and skills needed to identify, prevent, and respond to cyber threats effectively.",
      },
      {
        name: "Why Cybersecurity Awareness Training?​",
        description:
          "Cybersecurity threats are constantly evolving, and even the most advanced technical defenses can be compromised by simple human mistakes. Phishing attacks, social engineering, and malware are just a few of the tactics that can exploit unsuspecting employees. Our training program aims to minimize these risks by fostering a culture of security awareness within your organization.",
      },
    ],
    details:
      "We offer robust server infrastructure to ensure your business runs smoothly with high availability and scalability.",
  },
  {
    videoSource: "/fit/public/Server.mp4",
    title:
      "Data Center Solutions, Virtualization, Servers, Storage, and Backup",
    subtitle:
      "Transform your IT infrastructure with tailored data center solutions for optimal performance, scalability, and resilience.",
    subservices: [
      {
        name: "Density-optimized​ Servers​",
        description:
          "Do you have a limited space but need huge computing power and storage capacity? Not a problem anymore. High density servers optimized for the most demanding high-performance computing (HPC) and advanced data analytics compute workloads. These servers are designed to maximize computing power and storage capacity within a compact physical footprint. Speed of provisioning and time to service is increased with built-in fiber and software for connectivity, scalability and adaptability.",
      },
      {
        name: "Ready Nodes​​​",
        description:
          "vSAN Ready Nodes are x86 servers, available from all the leading server vendors, which have been pre-configured, tested, and certified for VMware Hyper-Converged Infrastructure Software. vSAN Ready Nodes are jointly recommended by the server OEM and VMware. Less complicated deployment and easy management.",
      },
      {
        name: "General Usage Servers (Tower/ Rack/ Blade)​​​​​",
        description:
          "For day-to-day general usage, you can choose from a wide variety of Tower, Rack and Blade servers, which best suits your requirement within your budget. If you do not have a rack, you can go for Tower and if you do have a rack then Rack or Blade servers are the solution. If you have a limited rack space, Blade servers are the most optimized solution which can produce a huge compute power with a minimum number of U count.",
      },
      {
        name: "Object​ Storage​​​​​",
        description:
          "If you want to store a huge amount of unstructured data and retrieve the quickly, a purpose-built solution for you is object storage. It is a data storage architecture for storing unstructured data, which sections data into units/objects and stores them in a structurally flat data environment. Each object includes data, metadata, and a unique identifier that applications can use for easy access and retrieval.",
      },
      {
        name: "Unified​​ Storage​​​​​",
        description:
          "Have you ever thought about SAN and NAS in a single box solution? Unified storage is a shared storage device that provides consolidated block and file services to open system clients and physical and virtual servers.",
      },
      {
        name: "Backup &​​​ Replication​",
        description:
          "Data protection is a major concern in today’s business world as data is the most valuable asset today. Without your data your business is no more. Backups and disaster recovery is extremely critical for today’s enterprises. We have a number of products that can provide you the capability of backing up your data and replicating your data to a disaster recovery site.",
      },
      {
        name: "Virtualization​",
        description:
          "Virtualization is the new norm in today’s IT Bear metal servers are no longer a topic in today’s IT. Almost everywhere, business data is processed, transferred and stored on top of virtual infrastructure. As a leader in integrating virtualized solutions, we provide you with the best virtualization solution that will address your pain points. With our virtualization solution whether it is traditional or hyper-converged, you will experience a higher resource utilization and reduced hardware footprint which will gain you a higher ROI.",
      },
    ],
    infrastructure: [
      {
        name: "Software-Centric Design",
        description:
          "HCI uses a hypervisor to virtualize and manage compute, storage, and networking as a unified system.",
      },
      {
        name: "Integrated Storage",
        description:
          "HCI replaces traditional SANs and NAS with software-defined storage, simplifying management and enhancing performance.",
      },
      {
        name: "Scalability & Cost Efficiency",
        description:
          "HCI lowers costs by consolidating IT functions and allows scalable growth by adding nodes as business demands.",
      },
      {
        name: "Simplified Management",
        description:
          "Centralized management tools offer a single interface for resource oversight, reducing administrative tasks and minimizing configuration errors.",
      },
    ],
  },
  {
    videoSource: "/fit/public/Collaboration.mp4",
    title: "Collaboration Suites and Applications",
    subtitle:
      "Our integrated solutions boost secure, efficient teamwork with integrated email, productivity tools, and advanced security features like DLP and AI-powered protection.",
      subservices: [
        // {
        //   name: "Next Generation Firewall – Perimeter / Internal​",
        //   description:
        //     "A Next Generation Firewall (NGFW) offers advanced security by integrating traditional firewall capabilities with ",
        // },
      ],
      includes: [
      {
        name: "Email Security with DLP​",
        description:
          "In today’s digital landscape, email remains a primary communication channel for businesses worldwide. However, it is also a prime target for cyber threats and data breaches. Protecting sensitive information and ensuring compliance with data protection regulations is crucial. This is where Advanced Email Security with Data Loss Prevention (DLP) comes into play.",
        heading: "Key Featurs of DLP,",
        features: [
          "Content Inspection",
          "Contextual Analysis",
          "Policy Enforcement",
          "Real-Time Alerts and Reporting",
        ],
      },
      {
        name: "MDM - Mobile Device Management​",
        description:
          "Email remains a vital communication tool in modern enterprises, enabling seamless collaboration and information exchange. However, with the increasing use of mobile devices to access corporate email, ensuring security and efficient management is paramount. Discover how Mobile Device Management (MDM) for email solutions can enhance your organization’s email security, compliance, and productivity.",
        heading: "What can we do with MDM ?",
        features: [
          "Centralized Management Console",
          "Secure Email Gateway",
          "Email Containerization",
          "Remote Management",
          "Reporting and Analytics",
        ],
      },
      {
        name: "Advance Archiving - Legal Holder​",
        description:
          "In the digital age, email is a cornerstone of business communication, yet it also presents significant challenges in terms of data management, security, and compliance. Advanced email archiving combined with legal hold capabilities ensures your organization can meet regulatory requirements, mitigate risks, and streamline eDiscovery processes. Here’s how advanced solutions can transform your email management strategy.",
        heading: "The benefits you can have",
        features: [
          "Automated Archiving",
          "Legal Hold Management",
          "Advanced Search and eDiscovery",
          "Secure Storage",
        ],
      },
    ],
    details:
      "Our team specializes in creating custom network solutions tailored to your business needs, ensuring optimal performance and security.",
  },
  {
    videoSource: "/fit/public/ManageService.mp4",
    title: "Next Generation Managed Services Provider",
    subtitle:
      "Entrust your IT infrastructure to our managed services for reliable, secure performance, enabling you to focus on core business.",
    subservices: [
      {
        name: "IT Infrastructure Operation & Maintenance Managed Services​​",
        description:
          "The IT Infrastructure Operation & Maintenance Managed Services provided by FIT encompass the comprehensive management of data centers and enterprise networks. This service ensures seamless operation and maintenance, optimizing enterprise and data center network infrastructures. It includes robust information security solutions and governance policies, maintenance of server hardware, storage solutions, backup systems, and disaster recovery plans. Additionally, we manage virtualization platforms, operating systems, databases, cloud infrastructure, support software development, and deploy applications. Our services also include operating a Network Operations Center (NOC), IT helpdesk, and call center services for support and issue resolution.",
      },
      {
        name: "24x7x365 Infrastructure Monitoring & L1 Support through Network Operation Center (NOC)​ ​​",
        description:
          "FIT offers 24x7x365 Infrastructure Monitoring & L1 Support through our Network Operation Center (NOC). This service ensures continuous, real-time monitoring and Level 1 support to maintain IT infrastructure availability, performance, security, and functionality. We deploy and optimize monitoring tools, monitor infrastructure around the clock to detect and respond to events and alerts promptly, escalate critical incidents for resolution, and provide daily and monthly performance reports.",
      },
      {
        name: "Network Operation Center ​ (NOC)​​​",
        description:
          "The Network Operation Center (NOC) at FIT is a centralized facility where our engineers manage, monitor, and control IT infrastructure. Operating 24×7, our NOC ensures continuous infrastructure availability and is equipped with Level 1 and Level 2 engineering resources. We adhere to ISO/IEC 20000 for IT Service Management and are certified to the ISO 27001:2022 Information Security Management System standard. The NOC serves as the central hub for delivering Next-Generation Managed Services Provider (NGMSP) services.",
      },
      {
        name: "Managed Security Service Provider (MSSP)​​​",
        description:
          "As a Managed Security Service Provider (MSSP), FIT operates a centralized security center focused on managing security incidents and responses. Our services include continuous monitoring of security events, detailed analysis and response to incidents, and proactive threat hunting. We offer advanced endpoint protection, manage security information, automate responses, and utilize the MITRE ATT&CK framework in our security operations. Our team of certified cybersecurity professionals delivers security alert notifications, threat intelligence, and periodic reports on security incidents and posture to ensure robust security for our clients.",
      },
    ],
    details:
      "Our team specializes in creating custom network solutions tailored to your business needs, ensuring optimal performance and security.",
  },
  {
    videoSource: "/fit/public/Network.mp4",
    title: "IP PABX and Unified Communication Systems",
    subtitle:
      "Streamline communication with our IP PABX and Unified Systems, enhancing real-time collaboration and boosting productivity across platforms.",
    subservices: [
      {
        name: "ComX Hosted Solution: Your Seamless Business Advantage with UCaaS ?​​",
        description:
          "Transform your business communications with ComX Hosted Solution’s UCaaS. Ideal for any company size, it enhances teamwork, productivity, and customer experience. Our VoIP softphone and smartphone apps offer quick access to various communication channels, including status updates, instant messaging, web conferencing, website chat, and email integration for faxes and voicemails.",
      },
      {
        name: "Boost Customer Service with ComX Contact Centre Solution​",
        description:
          "Enhance customer service with ComX’s advanced call center features. Our Live Chat & Talk plugin allows real-time chats, video calls, and regular calls, providing a truly integrated experience. Empower your employees to work smarter, track progress, and create meaningful customer interactions. Elevate your service with ComX.",
      },
    ],
    details:
      "Our team specializes in creating custom network solutions tailored to your business needs, ensuring optimal performance and security.",
  },
  {
    videoSource: "/fit/public/Network.mp4",
    title: "Enterprise Networking",
    subtitle:
      "FIT’s enterprise networking solutions optimize performance, enhance agility, and support seamless communication, ensuring scalable infrastructure for growing business needs.",
    subservices: [
      {
        name: "Routing and switching​",
        description:
          "Designing and implementing high-availability network infrastructure using routers and switches for efficient data communication always aligning with customer requirements while leveraging our expert knowledge to enhance network performance effectively. We are partnered with leading enterprise device manufacturers such as Cisco, Aruba, Huawei, and Juniper, providing long-term customer satisfaction and state-of-the-art support services. Selecting appropriate hardware from our trusted partners, including industry leaders like Cisco, Aruba, Huawei, and Juniper.",
      },
      {
        name: "WiFi Design and Implementation​",
        description:
          "Our company specializes in providing end-to-end WiFi solutions tailored for corporate IT environments. We understand the critical role that reliable and high-speed wireless connectivity plays in modern businesses. We will Conducting thorough site surveys to understand the unique requirements and challenges of your workspace and Collaborating with stakeholders to define performance expectations and coverage areas Creating detailed network designs that incorporate the latest technologies to ensure optimal performance, security, and scalability. Deploying the network infrastructure with precision, ensuring minimal disruption to your operations. Conducting rigorous testing to validate coverage, speed, and reliability. Our commitment to excellence extends beyond the initial deployment. We offer comprehensive after-sales services to ensure your WiFi network continues to perform at its best: Providing regular maintenance checks and updates to keep your network running smoothly.Implementing advanced monitoring solutions to proactively identify and resolve potential issues. Offering 24/7 technical support to address any immediate concerns or queries. Delivering training sessions to your IT staff to empower them with the knowledge to manage and troubleshoot the network. Providing detailed documentation and user guides for reference.",
      },
      {
        name: "Network Monitoring System​",
        description:
          "In today’s fast-paced digital landscape, the health and performance of a corporate network are crucial to business success. Network monitoring systems have become indispensable tools for companies of all sizes, providing real-time insights and ensuring seamless operations. This article explores the importance of network monitoring systems, their benefits, and how they contribute to the smooth operation of corporate networks. This solution designed to oversee the performance and health of a network. It continuously monitors network devices such as routers, switches, firewalls, and servers, identifying issues and ensuring optimal performance. By tracking key metrics and generating alerts for any anomalies, NMS helps IT teams proactively manage and maintain network infrastructure. This systems enable proactive detection of potential issues before they escalate into major problems. By continuously analyzing network traffic and performance metrics, these systems can identify abnormalities, such as unusual spikes in traffic, latency issues, or hardware failures. Early detection allows IT teams to address issues swiftly, minimizing downtime and ensuring smooth operations. NMS provides real-time data on network performance, helping IT teams to optimize resource allocation and ensure that the network operates at peak efficiency. This includes load balancing, bandwidth management, and optimizing the performance of critical applications. Enhanced network reliability leads to improved user experience and productivity.This NMS plays crucial role in enhancing network security. By monitoring traffic patterns and detecting suspicious activities, NMS can identify potential security threats such as unauthorized access attempts, malware, or Distributed Denial of Service (DDoS) attacks. Early identification of security incidents allows for timely interventions, protecting sensitive corporate data and maintaining network integrity.",
      },
      {
        name: "Software Defined Networks​",
        description:
          "In the rapidly evolving world of corporate IT infrastructure, Software-Defined Networking (SDN) stands out as a transformative technology. As your trusted IT service provider, we are at the forefront of delivering cutting-edge SDN solutions that redefine how businesses manage and optimize their networks. This report delves into the essence of SDN, its benefits, and how our tailored SDN services can drive your corporate network to new heights of efficiency and agility.",
      },
      {
        name: "Empowering Businesses with IoT Solutions​",
        description:
          "The Internet of Things (IoT) is revolutionizing industries by connecting devices, systems, and data in unprecedented ways. As your trusted IT service provider, we are at the forefront of delivering innovative IoT solutions that drive efficiency, productivity, and competitive advantage. This article explores the transformative potential of IoT, the range of solutions we offer, and the tangible benefits businesses can achieve through IoT integration. The Internet of Things (IoT) refers to the network of physical objects—devices, vehicles, buildings, and other items—embedded with sensors, software, and connectivity to exchange data with other devices and systems over the internet. IoT enables real-time data collection, monitoring, and analysis, leading to smarter decision-making and automation of processes.",
      },
      {
        name: "Data-center - Networking​",
        description:
          "Our Data-Center Networking division excels in delivering state-of-the-art network solutions for enterprise data centers, partnering with industry-leading switch manufacturers such as Cisco, Huawei, and Aruba. We leverage advanced switch fabrics and the latest technologies to build and maintain high-performance, resilient network infrastructures. Our team of industry experts, with deep technical knowledge and extensive experience, designs and deploys scalable solutions tailored to meet the unique demands of each client. From the strategic planning and integration of high-speed switches and routers to the implementation of robust security protocols, we ensure optimal network performance and reliability. Continuous monitoring and proactive support are integral to our approach, enabling businesses to achieve seamless operations, enhanced data flow efficiency, and successful digital transformation.",
      },
    ],
    details:
      "Our team specializes in creating custom network solutions tailored to your business needs, ensuring optimal performance and security.",
  },
  {
    videoSource: "/fit/public/innovation.mp4",
    title: "Innovation Centre",
    subtitle:
      "At Center of Innovation Make your vision a Reality. Transform your business idea into a cutting-edge digital solution!",
    subservices: [
      {
        name: "CashApp​",
        description:
          "Hassel-free petty cash management for your company.",
      },
      {
        name: "GPS Tracking",
        description:
          "Track your vehicle anytime, anywhere with one single login. Our 4G-enabled tracking devices ensure a high speed data rate toward your data accessibility,",
      },
      {
        name: "Asset Tracking",
        description:
          "Tracking and optimize their physical assets, including equipment, tools, and machinery.Application assists with work orders, maintenance schedules,managing equipment rentals etc",
      },
      {
        name: "Call Recording",
        description:
          "Record all kinds of Analog, Digital and SIP-based PABX/Calls to a mp3 file and relevant reports",
      },
      {
        name: "Call Billing",
        description:
          "Captures call records, including date, time, duration, and parties involved. This manage costs and optimize time",
      },
      {
        name: "CRM",
        description:
          "Manage customers and provide valuable insights and improving communication across sales, marketing and service teams",
      },
      {
        name: "Custormized SoftPhones",
        description:
          "Software based phone application that allows features like unique branding, and specialized functionalities, enhancing user experience and operational efficiency. This flexibility ensures the softphone integrates seamlessly with existing systems and workflows.",
      },
      {
        name: "Missed Call Manager App",
        description:
          "Efficiently tracks and manages missed calls, providing automated responses and follow-ups. It ensures no call goes unanswered, helping businesses capture leads, engage customers, and improve overall communication efficiency",
      },
      {
        name: "Linen Management",
        description:
          "Streamlines the tracking, distribution, and inventory of linens in facilities such as hospitals and hotels. It ensures efficient usage, reduces losses, and maintains hygiene standards by automating processes and providing real-time data on linen availability and condition.",
      },
      {
        name: "Incentives Manager for SAP HANA",
        description:
          "Baed on SAP HANA reports, application streamlines the process managing and monitoring incentive programs. It helps organizations motivate employees by offering rewards for achieving specific goals, such as performance benchmarks or sales targets. This software enhances productivity, boosts morale, and aligns individual actions with business objectives",
      },
      {
        name: "Debtor Manager for SAP HANA",
        description:
          "Based on SAP HANA reports, The Application helps businesses efficiently track and manage outstanding invoices. It automates the process of sending invoices, monitoring payments, and following up on overdue accounts. This ensures timely payments, improves cash flow, and reduces the risk of bad debts, ultimately enhancing financial stability.",
      },
      {
        name: "GPS Based Mobile Attendance",
        description:
          "Attendance application leverages geolocation technology to accurately track and record employee attendance. By using real-time location data, it ensures employees are present at designated work sites or offices when clocking in and out. This system enhances accountability, reduces time theft, and simplifies attendance management for remote and on-site workers",
      },
    ],
    details:
      "Our team specializes in creating custom network solutions tailored to your business needs, ensuring optimal performance and security.",
  },
];

export default services;
