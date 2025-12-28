
export const dummyCategories = [
    { id: "1", databaseId: 1, name: "Corporate", slug: "corporate", count: 12 },
    { id: "2", databaseId: 2, name: "Disputes", slug: "disputes", count: 8 },
    { id: "3", databaseId: 3, name: "Finance", slug: "finance", count: 15 },
    { id: "4", databaseId: 4, name: "Tax", slug: "tax", count: 5 },
    { id: "5", databaseId: 5, name: "Deals", slug: "deals", count: 20 },
    { id: "6", databaseId: 6, name: "People", slug: "people", count: 30 },
    { id: "7", databaseId: 7, name: "Insights", slug: "insights", count: 10 },
    { id: "8", databaseId: 8, name: "Real Estate", slug: "real-estate", count: 7 },
    { id: "9", databaseId: 9, name: "Technology", slug: "technology", count: 9 },
    { id: "10", databaseId: 10, name: "M&A", slug: "m-and-a", count: 10 },
    { id: "11", databaseId: 11, name: "Private Equity", slug: "private-equity", count: 6 },
    { id: "12", databaseId: 12, name: "Venture Capital", slug: "venture-capital", count: 8 },
    { id: "13", databaseId: 13, name: "Notarial Service", slug: "notarial-service", count: 3 },
    { id: "14", databaseId: 14, name: "Tech & Data", slug: "tech-data", count: 11 },
    { id: "15", databaseId: 15, name: "Rankings", slug: "rankings", count: 4 },
    { id: "16", databaseId: 16, name: "NEON News", slug: "neon-news", count: 5 },
    { id: "17", databaseId: 17, name: "Legal Insights", slug: "legal-insights", count: 6 },
    { id: "18", databaseId: 18, name: "Jobs", slug: "jobs", count: 5 },
    { id: "19", databaseId: 19, name: "Culture", slug: "culture", count: 3 },
    { id: "20", databaseId: 20, name: "Development", slug: "development", count: 2 },
    { id: "21", databaseId: 21, name: "Compensation", slug: "compensation", count: 1 },
    { id: "22", databaseId: 22, name: "About", slug: "about", count: 1 },
];

export const dummyBeliefs = [
    {
        slug: "clients-first",
        title: "Clients First",
        beliefFields: {
            teaserPrefix: "Our Core",
            teaserTitle: "Putting Clients First"
        },
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/handshake.png",
                altText: "Clients First"
            }
        }
    },
    {
        slug: "excellence",
        title: "Excellence",
        beliefFields: {
            teaserPrefix: "Our Standard",
            teaserTitle: "Pursuing Excellence"
        },
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/office-building.png",
                altText: "Excellence"
            }
        }
    },
    {
        slug: "innovation",
        title: "Innovation",
        beliefFields: {
            teaserPrefix: "Our Drive",
            teaserTitle: "Innovating Law"
        },
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/office-meeting.png",
                altText: "Innovation"
            }
        }
    },
    {
        slug: "integrity",
        title: "Integrity",
        beliefFields: {
            teaserPrefix: "Our Foundation",
            teaserTitle: "Uncompromising Integrity"
        },
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/man-portrait.png",
                altText: "Integrity"
            }
        }
    }
];

export const dummyPeople = [
    {
        id: "p1",
        title: "Jane Doe",
        slug: "jane-doe",
        excerpt: "Senior Partner specializing in Corporate Law and high-stakes M&A transactions.",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/woman-portrait.png",
                altText: "Jane Doe"
            }
        },
        peopleFields: {
            position: "Senior Partner",
            email: "jane.doe@neon.law",
            linkedin: "https://linkedin.com",
            office: "New York",
            featured: true,
            weight: 1,
            headline: "Dealmaking is about understanding the human element behind the numbers.",
            introLeft: "<p>Jane Doe is a renowned Senior Partner at NEON, bringing over two decades of exceptional experience in corporate law and mergers & acquisitions. She is widely recognized for her strategic acumen and her ability to navigate complex cross-border transactions with precision and grace. Jane's practice focuses on representing multinational corporations, private equity firms, and investment banks in their most critical business dealings.</p><p>Throughout her distinguished career, Jane has been at the forefront of some of the decade's most significant market-moving deals. Her deep understanding of regulatory frameworks combined with her sharp negotiation skills has earned her a reputation as a formidable advocate for her clients. She is not just a legal advisor but a trusted strategic partner who aligns legal solutions with broader business objectives.</p>",
            introRight: "<p>In addition to her transactional practice, Jane is a dedicated mentor and a thought leader in the legal community. She frequently speaks at international forums on the evolving landscape of corporate governance and shareholder activism. Jane is also a champion for diversity and inclusion within the legal profession, spearheading several initiatives to support the advancement of women in law.</p><p>Her commitment to excellence extends beyond the boardroom; Jane serves on the boards of several non-profit organizations focused on education and economic empowerment. Her holistic approach to law and leadership makes her an invaluable asset to NEON and its clients.</p>",
            headshot: {
                node: {
                    sourceUrl: "/images/dummy/woman-portrait.png",
                    altText: "Jane Doe Headshot"
                }
            },
            qualifications: "New York State Bar Admission (2001)\nJuris Doctor, Harvard Law School, cum laude\nBachelor of Arts in Economics, Yale University",
            work: "Led the $500M acquisition of AI functionalities for TechGiant Corp.\nAdvised PharmaPlus on their $1.2B cross-border merger.\nrepresented GlobalFinance in a $750M strategic restructuring.\nCounsel to various Fortune 500 boards on governance matters.",
            education: "Harvard Law School, J.D. (2001)\nYale University, B.A. Economics (1998)"
        },
        categories: {
            nodes: [
                { name: "Corporate", slug: "corporate", databaseId: 1 },
                { name: "People", slug: "people", databaseId: 6 },
                { name: "M&A", slug: "m-and-a", databaseId: 10 }
            ]
        }
    },
    {
        id: "p2",
        title: "John Smith",
        slug: "john-smith",
        excerpt: "Expert in International Tax Law and Financial Structuring.",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/man-portrait.png",
                altText: "John Smith"
            }
        },
        peopleFields: {
            position: "Partner",
            email: "john.smith@neon.law",
            linkedin: "https://linkedin.com",
            office: "London",
            featured: false,
            weight: 2,
            headline: "Simplicity on the other side of complexity.",
            introLeft: "<p>John Smith is a leading authority in international tax law and financial structuring, operating out of NEON's London office. With a keen analytical mind and a deep grasp of global fiscal policies, John advises multinational conglomerates and high-net-worth individuals on optimizing their tax liabilities while ensuring full compliance across jurisdictions.</p><p>His expertise spans transfer pricing, double taxation treaties, and the tax implications of complex reorganizations. John is known for his ability to distill intricate tax codes into clear, actionable strategies that drive value and mitigate risk for his clients.</p>",
            introRight: "<p>Prior to joining NEON, John served as a senior advisor to the Treasury Department, where he played a key role in drafting regulations related to international tax reform. This unique background gives him an insider's perspective on regulatory trends and enforcement priorities.</p><p>John acts as a bridge between financial ambition and regulatory reality. He is frequently sought after for his insights on the impact of digital economy taxation and sustainable finance initiatives.</p>",
            headshot: {
                node: {
                    sourceUrl: "/images/dummy/man-portrait.png",
                    altText: "John Smith Headshot"
                }
            },
            qualifications: "Solicitor of the Senior Courts of England and Wales\nMaster of Laws (LL.M.) in Taxation, LSE\nB.Sc. in Mathematics, Imperial College London",
            work: "Structured the tax framework for a multi-billion dollar merger in the pharmaceutical sector.\nAdvised a global tech firm on IP migration strategies post-BEPS.\nSuccessfully defended a client in a high-profile tax controversy case.\nDeveloped tax-efficient investment structures for a sovereign wealth fund.",
            education: "London School of Economics, LL.M. (2008)\nImperial College London, B.Sc. (2006)"
        },
        categories: {
            nodes: [
                { name: "Tax", slug: "tax", databaseId: 4 },
                { name: "People", slug: "people", databaseId: 6 },
                { name: "Finance", slug: "finance", databaseId: 3 }
            ]
        }
    },
    {
        id: "p3",
        title: "Alice Johnson",
        slug: "alice-johnson",
        excerpt: "Leading Litigator in Real Estate and Commercial Disputes.",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/woman-portrait.png",
                altText: "Alice Johnson"
            }
        },
        peopleFields: {
            position: "Partner",
            email: "alice.johnson@neon.law",
            linkedin: "https://linkedin.com",
            office: "Chicago",
            featured: true,
            weight: 3,
            headline: "Advocacy that builds foundations.",
            introLeft: "<p>Alice Johnson is a powerhouse in the field of real estate litigation and commercial disputes. Based in Chicago, she heads NEON's Real Estate Disputes practice, where she represents major developers, REITs, and municipalities in high-stakes litigation and arbitration.</p><p>Alice is celebrated for her aggressive yet strategic approach to dispute resolution. Whether navigating complex zoning appeals, construction defect claims, or landlord-tenant conflicts, she brings a depth of industry knowledge that is unmatched. Her track record includes securing landmark victories that have shaped local property laws.</p>",
            introRight: "<p>Alice believes that every dispute is an opportunity for clarity and resolution. She works closely with clients not only to win cases but to develop long-term risk management strategies that prevent future conflicts.</p><p>A dedicated advocate for affordable housing, Alice dedicates a significant portion of her pro bono time to legal aid organizations assisting low-income tenants. She is a frequent lecturer at the University of Chicago Law School on property law and civil procedure.</p>",
            headshot: {
                node: {
                    sourceUrl: "/images/dummy/woman-portrait.png",
                    altText: "Alice Johnson Headshot"
                }
            },
            qualifications: "Illinois State Bar Admission (2005)\nJ.D., University of Chicage Law School\nB.A. in Urban Studies, Columbia University",
            work: "Successfully represented Urban Developers in a zoning dispute for the Downtown Skyscraper Project.\nSecured a favorable settlement for a REIT in a $100M lease dispute.\nDefended a major construction firm against defect claims in a class-action lawsuit.\nAdvised the City Council on drafting new mixed-use development regulations.",
            education: "University of Chicago Law School, J.D. (2005)\nColumbia University, B.A. (2002)"
        },
        categories: {
            nodes: [
                { name: "Disputes", slug: "disputes", databaseId: 2 },
                { name: "People", slug: "people", databaseId: 6 },
                { name: "Real Estate", slug: "real-estate", databaseId: 8 }
            ]
        }
    },
    {
        id: "p4",
        title: "Michael Chen",
        slug: "michael-chen",
        excerpt: "Tech & Data Privacy Counsel advising Silicon Valley's giants.",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/man-portrait.png",
                altText: "Michael Chen"
            }
        },
        peopleFields: {
            position: "Counsel",
            email: "michael.chen@neon.law",
            linkedin: "https://linkedin.com",
            office: "San Francisco",
            featured: false,
            weight: 4,
            headline: "Data is the new currency. Protection is the new vault.",
            introLeft: "<p>Michael Chen is a preeminent voice in the intersection of technology, law, and privacy. Based in San Francisco, he serves as Counsel for the Tech & Data practice group. With a background in computer science prior to his legal career, Michael possesses a rare technical fluency that allows him to bridge the gap between engineering teams and legal compliance.</p><p>He advises major social media platforms, AI startups, and cloud service providers on GDPR, CCPA, and emerging global privacy frameworks. His proactive approach helps companies build privacy-by-design products that withstand regulatory scrutiny.</p>",
            introRight: "<p>Michael is deeply involved in policy advocacy, regularly consulting with legislators on the drafting of digital rights laws. He is a strong proponent of ethical AI development and has authored several influential papers on algorithmic accountability.</p><p>Outside of his practice, Michael mentors law students interested in legal tech and serves as an advisor to several incubator programs in the Bay Area.</p>",
            headshot: {
                node: {
                    sourceUrl: "/images/dummy/man-portrait.png",
                    altText: "Michael Chen Headshot"
                }
            },
            qualifications: "Certified Information Privacy Professional (CIPP/US, CIPP/E)\nCalifornia State Bar Admission (2010)\nJ.D., Stanford Law School\nB.S. in Computer Science, MIT",
            work: "Led the GDPR compliance audit for GlobalData Systems.\nDefended a social media giant in a multi-state data breach investigation.\nDrafted terms of service and privacy policies for a unicorn fintech app.\nAdvised on the data privacy implications of a $2B acquisition.",
            education: "Stanford Law School, J.D. (2010)\nMassachusetts Institute of Technology, B.S. Computer Science (2007)"
        },
        categories: {
            nodes: [
                { name: "Tech & Data", slug: "tech-data", databaseId: 14 },
                { name: "People", slug: "people", databaseId: 6 },
                { name: "Technology", slug: "technology", databaseId: 9 }
            ]
        }
    },
    {
        id: "p5",
        title: "Sarah Lee",
        slug: "sarah-lee",
        excerpt: "Venture Capital Specialist empowering the next generation of founders.",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/woman-portrait.png",
                altText: "Sarah Lee"
            }
        },
        peopleFields: {
            position: "Senior Associate",
            email: "sarah.lee@neon.law",
            linkedin: "https://linkedin.com",
            office: "Berlin",
            featured: false,
            weight: 5,
            headline: "Fueling innovation with smart legal capital.",
            introLeft: "<p>Sarah Lee is a key member of NEON's Venture Capital team, operating out of the vibrant Berlin startup ecosystem. She specializes in representing high-growth startups and venture capital funds in financing rounds, from seed stage to late-stage growth capital.</p><p>Sarah's pragmatic and founder-friendly approach has made her a go-to advisor for entrepreneurs. She understands the speed at which startups move and provides agile legal solutions that facilitate growth rather than hinder it.</p>",
            introRight: "<p>Deeply embedded in the European tech scene, Sarah organizes regular workshops for female founders and investors. She is passionate about closing the gender gap in venture capital funding.</p><p>Before joining NEON, Sarah worked at a leading legal tech startup, giving her firsthand experience of the operational challenges her clients face.</p>",
            headshot: {
                node: {
                    sourceUrl: "/images/dummy/woman-portrait.png",
                    altText: "Sarah Lee Headshot"
                }
            },
            qualifications: "Rechtsanwältin (Germany)\nLL.M. in Law & Technology, Humboldt University of Berlin\nLaw Degree, University of Heidelberg",
            work: "Represented FinTech Innovators in their $200M IPO on the NYSE.\nAdvised a Berlin-based AI startup on its Series A and Series B funding rounds.\nStructured a cross-border venture debt facility for a SaaS scale-up.\nMentored over 50 startups through the TechStars accelerator program.",
            education: "Humboldt University of Berlin, LL.M. (2014)\nUniversity of Heidelberg, Law Degree (2012)"
        },
        categories: {
            nodes: [
                { name: "Venture Capital", slug: "venture-capital", databaseId: 12 },
                { name: "People", slug: "people", databaseId: 6 },
                { name: "Finance", slug: "finance", databaseId: 3 }
            ]
        }
    },
    {
        id: "p6",
        title: "Robert Brown",
        slug: "robert-brown",
        excerpt: "Notarial Services Expert ensuring absolute legal certainty.",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/man-portrait.png",
                altText: "Robert Brown"
            }
        },
        peopleFields: {
            position: "Notary",
            email: "robert.brown@neon.law",
            linkedin: "https://linkedin.com",
            office: "Berlin",
            featured: false,
            weight: 6,
            headline: "Precision is the only standard.",
            introLeft: "<p>Robert Brown heads the Notarial Services division at NEON's Berlin office. With decades of experience as a civil law notary, Robert handles complex corporate and real estate authentications with meticulous attention to detail.</p><p>He is trusted by major banking institutions and real estate funds to oversee the closing of high-value transactions. Robert's deep knowledge of German property law and corporate statutes ensures that every deed he executes is watertight.</p>",
            introRight: "<p>Robert is known for his ability to explain complex legal formalities in plain language, making the notarization process smooth and transparent for international clients. He coordinates closely with the M&A and Real Estate teams to provide a seamless full-service experience.</p><p>He serves on the Board of the Berlin Chamber of Notaries and contributes to the modernization of electronic notarial procedures.</p>",
            headshot: {
                node: {
                    sourceUrl: "/images/dummy/woman-portrait.png",
                    altText: "Robert Brown Headshot"
                }
            },
            qualifications: "Appointed Civil Law Notary (Berlin)\nDoctor of Laws (Dr. iur.), University of Munich\nAssessor Exam, Bavaria",
            work: "Notarized the deed for the Downtown Skyscraper Project acquisition.\nOversaw the share pledge agreements for a major corporate restructuring.\nHandled the land charge creation for a €300M real estate portfolio refinancing.\nAuthored a commentary on the German Notarization Act.",
            education: "University of Munich, Dr. iur. (1995)\nUniversity of Munich, Law Degree (1992)"
        },
        categories: {
            nodes: [
                { name: "Notarial Service", slug: "notarial-service", databaseId: 13 },
                { name: "People", slug: "people", databaseId: 6 },
                { name: "Real Estate", slug: "real-estate", databaseId: 8 }
            ]
        }
    },
    {
        id: "p7",
        title: "Emily Davis",
        slug: "emily-davis",
        excerpt: "Strategic counsel for Private Equity powerhouses.",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/woman-portrait.png",
                altText: "Emily Davis"
            }
        },
        peopleFields: {
            position: "Partner",
            email: "emily.davis@neon.law",
            linkedin: "https://linkedin.com",
            office: "New York",
            featured: true,
            weight: 7,
            headline: "Creating value through strategic acquisitions.",
            introLeft: "<p>Emily Davis is a Partner in the Private Equity practice in New York. She advises some of the world's largest private equity funds, sovereign wealth funds, and family offices on leveraged buyouts, growth equity investments, and exits.</p><p>Emily is renowned for her commercial awareness and her ability to execute transactions at lightning speed. She has a particular focus on the healthcare and consumer retail sectors, where she has guided clients through transformative acquisitions.</p>",
            introRight: "<p>Beyond her deal work, Emily counsels portfolio companies on general corporate matters and executive compensation. She is a trusted sounding board for investment committees and boards of directors.</p><p>Emily is an active member of the Private Equity Women Investor Network and mentors young female associates in the firm.</p>",
            headshot: {
                node: {
                    sourceUrl: "/images/dummy/woman-portrait.png",
                    altText: "Emily Davis Headshot"
                }
            },
            qualifications: "New York State Bar Admission (2008)\nJ.D., Columbia Law School, Harlan Fiske Stone Scholar\nB.A. in Political Science, Duke University",
            work: "Co-led the IPO of FinTech Innovators alongside Sarah Lee.\nAdvised a PE fund on the $2B take-private of a healthcare chain.\nRepresented a sovereign wealth fund in a minority potential investment in a tech unicorn.\nNegotiated complex management incentive plans for portfolio company executives.",
            education: "Columbia Law School, J.D. (2008)\nDuke University, B.A. (2005)"
        },
        categories: {
            nodes: [
                { name: "Private Equity", slug: "private-equity", databaseId: 11 },
                { name: "People", slug: "people", databaseId: 6 },
                { name: "M&A", slug: "m-and-a", databaseId: 10 }
            ]
        }
    }
];

export const dummyDeals = [
    {
        id: "d1",
        slug: "acquisition-of-tech-startup",
        title: "Acquisition of AI Startup",
        date: "2023-10-15T10:00:00",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/office-meeting.png",
                altText: "Tech Startup Acquisition"
            }
        },
        content: "<p>NEON advised TechGiant Corp, a leading global technology conglomerate, on its strategic acquisition of NeuroAI, a Silicon Valley-based artificial intelligence startup specializing in generative language models. The transaction, valued at $500 million, represents a significant consolidation in the AI sector.</p><h3>Key Aspects</h3><ul><li>Negotiation of intellectual property transfer and licensing agreements.</li><li>Integration of NeuroAI's 50-person engineering team into TechGiant's R&D division.</li><li>Regulatory approval filings with the FTC and DOJ.</li></ul><p>This acquisition will accelerate TechGiant's roadmap for integrating conversational AI into its flagship consumer products.</p>",
        dealFields: {
            client: "TechGiant Corp",
            dealDate: "October 2023",
            heroTitle: "Acquisition of AI Startup",
            leftColumn: "<p>Advised TechGiant Corp on its $500M acquisition of AI functionalities.</p>",
            rightColumn: "<p>This strategic move enhances their capability in generative AI.</p>",
            team: {
                edges: [
                    { node: dummyPeople[0] } // Jane Doe
                ]
            }
        },
        categories: {
            nodes: [
                { name: "Deals", slug: "deals", databaseId: 5 },
                { name: "M&A", slug: "m-and-a", databaseId: 10 },
                { name: "Technology", slug: "technology", databaseId: 9 }
            ]
        }
    },
    {
        id: "d2",
        slug: "merger-pharmaceuticals",
        title: "Merger with BioHealth",
        date: "2023-09-01T10:00:00",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/handshake.png",
                altText: "Pharma Merger"
            }
        },
        content: "<p>NEON represented PharmaPlus in its landmark cross-border merger with BioHealth, creating one of the world's largest personalized medicine companies. The all-stock transaction was valued at approximately $1.2 billion and involved complex regulatory clearances across the US, EU, and Asia.</p><h3>Transaction Highlights</h3><ul><li>Structuring of the tax-efficient reverse triangular merger.</li><li>Coordination of antitrust filings in 15 jurisdictions.</li><li>Negotiation of governance rights for the combined entity's board.</li></ul><p>The merger positions the new entity to lead the market in gene therapy and precision oncology treatments.</p>",
        dealFields: {
            client: "PharmaPlus",
            dealDate: "September 2023",
            heroTitle: "Merger with BioHealth",
            leftColumn: "<p>Represented PharmaPlus in their cross-border merger.</p>",
            rightColumn: "<p>Creating a global leader in personalized medicine.</p>",
            team: {
                edges: [
                    { node: dummyPeople[1] } // John Smith
                ]
            }
        },
        categories: {
            nodes: [
                { name: "Deals", slug: "deals", databaseId: 5 },
                { name: "Corporate", slug: "corporate", databaseId: 1 }
            ]
        }
    },
    {
        id: "d3",
        slug: "real-estate-development",
        title: "Downtown Skyscraper Project",
        date: "2023-08-15T10:00:00",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/office-building.png",
                altText: "Skyscraper"
            }
        },
        content: "<p>NEON acted as lead counsel for Urban Developers in the development of 'The Apex', a 50-story mixed-use skyscraper in the heart of the Financial District. The project required navigating a labyrinth of zoning variations, air rights transfers, and construction financing arrangements.</p><h3>Project Scope</h3><ul><li>Securing $300M in construction financing from a consortium of lenders.</li><li>Negotiating air rights transfers from adjacent historic properties.</li><li>Drafting construction contracts with general contractors and architects.</li></ul><p>Upon completion, The Apex will feature 200 luxury condominiums, Class A office space, and a public observation deck.</p>",
        dealFields: {
            client: "Urban Developers",
            dealDate: "August 2023",
            heroTitle: "Downtown Skyscraper Project",
            leftColumn: "<p>Advised on zoning and construction contracts.</p>",
            rightColumn: "<p>A 50-story mixed-use development in the city center.</p>",
            team: {
                edges: [
                    { node: dummyPeople[2] }, // Alice Johnson
                    { node: dummyPeople[5] } // Robert Brown
                ]
            }
        },
        categories: {
            nodes: [
                { name: "Deals", slug: "deals", databaseId: 5 },
                { name: "Real Estate", slug: "real-estate", databaseId: 8 }
            ]
        }
    },
    {
        id: "d4",
        slug: "ipo-fintech",
        title: "IPO of FinTech Innovators",
        date: "2023-07-20T10:00:00",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/office-meeting.png",
                altText: "IPO"
            }
        },
        content: "<p>NEON advised FinTech Innovators, a disruptor in the digital payments space, on its successful Initial Public Offering on the New York Stock Exchange. The offering raised $200 million and valued the company at over $1 billion.</p><h3>Role and Responsibilities</h3><ul><li>Drafting the Form S-1 Registration Statement.</li><li>Responding to SEC comment letters.</li><li>Due diligence on intellectual property and regulatory compliance.</li><li>Negotiating the underwriting agreement with investment banks.</li></ul><p>The IPO proceeds will fuel the company's expansion into the Asian and Latin American markets.</p>",
        dealFields: {
            client: "FinTech Innovators",
            dealDate: "July 2023",
            heroTitle: "IPO of FinTech Innovators",
            leftColumn: "<p>Lead counsel for the initial public offering.</p>",
            rightColumn: "<p>Raised $200M on the NYSE.</p>",
            team: {
                edges: [
                    { node: dummyPeople[4] }, // Sarah Lee
                    { node: dummyPeople[6] } // Emily Davis
                ]
            }
        },
        categories: {
            nodes: [
                { name: "Deals", slug: "deals", databaseId: 5 },
                { name: "Finance", slug: "finance", databaseId: 3 },
                { name: "Venture Capital", slug: "venture-capital", databaseId: 12 }
            ]
        }
    },
    {
        id: "d5",
        slug: "gdpr-compliance-audit",
        title: "GDPR Compliance Audit",
        date: "2023-06-10T10:00:00",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/man-portrait.png",
                altText: "Audit"
            }
        },
        content: "<p>NEON was retained by GlobalData Systems, a cloud infrastructure provider, to conduct a comprehensive audit of its data processing activities across its European operations. The mandate aimed to ensure full compliance with the General Data Protection Regulation (GDPR) in light of recent regulatory enforcement actions.</p><h3>Audit Outcomes</h3><ul><li>Mapping of all personal data flows across 5 EU countries.</li><li>Update of Data Processing Agreements (DPAs) with 50+ vendors.</li><li>Implementation of a new automated Subject Access Request (SAR) system.</li><li>Training of 500+ employees on data privacy best practices.</li></ul><p>The audit successfully mitigated potential liability risks and strengthened the client's trust reputation with enterprise customers.</p>",
        dealFields: {
            client: "GlobalData Systems",
            dealDate: "June 2023",
            heroTitle: "GDPR Compliance Audit",
            leftColumn: "<p>Conducted full data privacy audit for EU operations.</p>",
            rightColumn: "<p>Ensured full compliance with new regulations.</p>",
            team: {
                edges: [
                    { node: dummyPeople[3] } // Michael Chen
                ]
            }
        },
        categories: {
            nodes: [
                { name: "Deals", slug: "deals", databaseId: 5 },
                { name: "Tech & Data", slug: "tech-data", databaseId: 14 }
            ]
        }
    }
];

export const dummyJobs = [
    {
        id: "j1",
        slug: "senior-associate",
        title: "Senior Associate - Corporate / M&A",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/office-meeting.png",
                altText: "Corporate Team Meeting"
            }
        },
        jobFields: {
            tileLabel: "New York",
            tileTitle: "Join our Elite Corporate Team",
            introduction: "We are seeking a high-caliber Senior Associate to lead transformative deals.",
            heroTitle: "Senior Associate Opportunity",
            ctaLabel: "Apply Now",
            ctaUrl: "#",
            mission: "Lead and manage complex domestic and cross-border M&A transactions from inception to closing.\nAct as the primary point of contact for key clients, developing deep, trusted relationships.\nMentor and supervise junior associates, fostering a culture of excellence and continuous learning.\nDraft, review, and negotiate high-stakes transaction documents with precision.\nCollaborate across tax, IP, and regulatory practice groups to deliver integrated legal solutions.\nContribute to business development initiatives and represent the firm at industry conferences.",
            offer: "Highly competitive salary tailored to top-tier market standards.\nComprehensive health, dental, and vision insurance for you and your family.\nGenerous annual performance bonus structure.\nFlexible working arrangements supporting work-life integration.\nSabbatical program after 5 years of service.\nAccess to exclusive professional development and leadership training.",
            profile: "5-7 years of experience in Corporate Law at a top-tier law firm.\nBar admission in New York with good standing.\nExceptional negotiation and drafting skills with a keen eye for detail.\nProven track record of managing deal teams and hitting tight deadlines.\nBusiness acumen to understand the client's commercial drivers.\nStrong interpersonal skills and a collaborative mindset.",
            signingBonus: "Significant sign-on bonus available for candidates with portable business cases.",
            contact: { name: "Talent Acquisition", email: "careers.ny@neon.law", phone: "+1 212 555 0199" }
        },
        categories: { nodes: [{ name: "Jobs", slug: "jobs", databaseId: 18 }] }
    },
    {
        id: "j2",
        slug: "paralegal-litigation",
        title: "Senior Paralegal - Litigation",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/office-building.png",
                altText: "Litigation Support"
            }
        },
        jobFields: {
            tileLabel: "London",
            tileTitle: "Support High-Stakes Litigation",
            introduction: "Seeking a detail-oriented professional to support our Dispute Resolution practice.",
            heroTitle: "Senior Paralegal Position",
            ctaLabel: "Apply Now",
            ctaUrl: "#",
            mission: "Manage complex case files and maintain comprehensive document indexes used in high-profile trials.\nconduct in-depth legal research and draft memoranda for partner review.\nCoordinate filings with courts and arbitration tribunals, ensuring strict adherence to procedural deadlines.\nLiaise with clients, witnesses, and experts to organize evidence and testimony.\nPrepare trial bundles and assist counsel during court hearings.\nTrain and mentor junior support staff on firm protocols.",
            offer: "Market-leading salary with paid overtime opportunites.\nDynamic, fast-paced international work environment.\nAnnual performance-based bonus.\nComprehensive private medical insurance and pension scheme.\nTuition assistance for further legal qualifications (e.g., LPC, SQE).\nRegular team socials and networking events.",
            profile: "3+ years of experience as a paralegal in a commercial litigation department.\nExcellent organizational and time-management skills.\nProficiency in legal research databases (LexisNexis, Westlaw).\nAbility to work under pressure and handle sensitive confidential information.\nBachelor’s degree in Law or related field preferred.\nFluency in a second European language is an asset.",
            signingBonus: "Relocation assistance provided for international candidates.",
            contact: { name: "London Recruitment", email: "recruitment.lon@neon.law", phone: "+44 20 7946 0123" }
        },
        categories: { nodes: [{ name: "Jobs", slug: "jobs", databaseId: 18 }] }
    },
    {
        id: "j3",
        slug: "legal-engineer",
        title: "Legal Engineer / Legal Ops",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/office-meeting.png",
                altText: "Legal Tech"
            }
        },
        jobFields: {
            tileLabel: "Berlin / Remote",
            tileTitle: "Innovate the Future of Law",
            introduction: "Join our Tech & Data team to build the legal infrastructure of tomorrow.",
            heroTitle: "Legal Engineer",
            ctaLabel: "Apply Now",
            ctaUrl: "#",
            mission: "Design and implement automated workflows to streamline legal service delivery.\nEvaluate and deploy cutting-edge legal technology tools (AI review, contract automation).\nBridge the gap between legal teams and software developers to translate needs into specs.\nAnalyze data to provide insights on practice group efficiency and profitability.\nTrain lawyers on new digital tools and best practices.\nDevelop custom scripts and integrations to connect our tech stack.",
            offer: "Competitive tech-industry level salary and equity options.\nRemote-first culture with optional coworking space in Berlin.\nBudget for attending global legal tech conferences and hackathons.\nLatest hardware setup (MacBook Pro, dual monitors).\nOpen and flat hierarchy where your ideas count.\nHealth and wellness stipend.",
            profile: "Background in both Law and Technology (e.g., CS degree + legal experience, or Law degree + coding bootcamp).\nProficiency in Python, SQL, or JavaScript.\nExperience with no-code/low-code platforms (Zapier, BRYTER, etc.).\nUnderstanding of the legal market and law firm economics.\nCreative problem solver with a 'status quo is not enough' attitude.\nFluent in English; German is a plus.",
            signingBonus: "Tech gear upgrade bonus upon signing.",
            contact: { name: "Innovation Lab", email: "tech@neon.law", phone: "+49 30 1234 5678" }
        },
        categories: { nodes: [{ name: "Jobs", slug: "jobs", databaseId: 18 }] }
    },
    {
        id: "j4",
        slug: "marketing-manager",
        title: "Global Marketing Manager",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/woman-portrait.png",
                altText: "Marketing Strategy"
            }
        },
        jobFields: {
            tileLabel: "New York",
            tileTitle: "Shape our Global Brand",
            introduction: "We need a visionary to elevate the NEON brand worldwide.",
            heroTitle: "Marketing Manager",
            ctaLabel: "Apply Now",
            ctaUrl: "#",
            mission: "Develop and execute comprehensive marketing strategies to enhance brand visibility.\nManage global thought leadership campaigns across social media, web, and print.\nCoordinate client events, webinars, and exclusive roundtables.\nOversee the firm's submission process for legal directories (Chambers, Legal 500).\nAnalyze marketing ROI and adjust strategies based on data-driven insights.\nCollaborate with partners to create tailored business development materials.",
            offer: "Attractive salary package with performance incentives.\nOpportunity to travel to our international offices.\nComprehensive healthcare and retirement savings plan.\nGenerous vacation policy (25+ days).\nProfessional development budget for certifications (e.g., CIM).\nVibrant and creative office culture.",
            profile: "5+ years of experience in B2B marketing, preferably in professional services.\nStrong digital marketing skills (SEO, LinkedIn, Email Marketing).\nExcellent copywriting and editing abilities.\nExperience managing budgets and external agencies.\nStrategic thinker with the ability to execute tactically.\nBachelor's degree in Marketing, Communications, or related field.",
            signingBonus: "Performance-based quarterly bonuses.",
            contact: { name: "HR Department", email: "careers.ny@neon.law", phone: "+1 212 555 0199" }
        },
        categories: { nodes: [{ name: "Jobs", slug: "jobs", databaseId: 18 }] }
    },
    {
        id: "j5",
        slug: "junior-associate-finance",
        title: "Junior Associate - Banking & Finance",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/man-portrait.png",
                altText: "Finance Team"
            }
        },
        jobFields: {
            tileLabel: "Singapore",
            tileTitle: "Launch your Career in Finance",
            introduction: "An exceptional opportunity for a newly qualified lawyer.",
            heroTitle: "Junior Associate Position",
            ctaLabel: "Apply Now",
            ctaUrl: "#",
            mission: "Draft and review facility agreements, security documents, and legal opinions.\nAssist in due diligence for major cross-border financing transactions.\nConduct regulatory research on banking laws and compliance standards.\nAttend client meetings and negotiation sessions with senior partners.\nManage conditions precedent checklists and closing mechanics.\nCollaborate with international counsel on multi-jurisdictional deals.",
            offer: "Top-of-market salary for junior associates.\nStructured mentorship program with senior partners.\nSecondment opportunities to clients or other international offices.\nComprehensive health insurance and gym membership.\nRelocation package for international hires.\nClear path for career progression.",
            profile: "Outstanding academic record (top 10% of class).\nNewly qualified lawyer or 1-2 years of post-qualification experience.\nStrong interest in financial markets and banking law.\nImpeccable attention to detail and work ethic.\nAbility to work in a fast-paced, high-pressure environment.\nFluency in English and Mandarin is preferred.",
            signingBonus: "Relocation support.",
            contact: { name: "Singapore Office", email: "careers.sg@neon.law", phone: "+65 6789 0123" }
        },
        categories: { nodes: [{ name: "Jobs", slug: "jobs", databaseId: 18 }] }
    }
];

export const dummyPosts = [
    {
        id: "post1",
        title: "Global Market Trends 2024",
        slug: "global-market-trends-2024",
        excerpt: "An analysis of the upcoming market trends for the next fiscal year.",
        content: "<p>As we approach 2024, the global market landscape is witnessing a paradigm shift driven by technological acceleration and geopolitical realignments. Corporations must adapt to a new era of volatility and opportunity.</p><h3>Key Trends to Watch</h3><ul><li><strong>AI Integration:</strong> Generative AI is moving from pilot projects to core business operations, driving efficiency and new revenue models.</li><li><strong>Sustainability Mandates:</strong> Regulatory pressure for ESG reporting is tightening, making sustainability a compliance necessity rather than just a PR asset.</li><li><strong>Supply Chain Resilience:</strong> Diversification and near-shoring are replacing just-in-time models to mitigate disruption risks.</li></ul><p>NEON's Market Intelligence team advises clients to adopt agile strategies to navigate this complex environment.</p>",
        date: "2023-11-20T10:00:00",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/office-building.png",
                altText: "Market Trends"
            }
        },
        categories: {
            nodes: [
                { name: "Insights", slug: "insights", databaseId: 7 },
                { name: "Legal Insights", slug: "legal-insights", databaseId: 17 }
            ]
        }
    },
    {
        id: "post2",
        title: "Regulatory Changes in EU",
        slug: "regulatory-changes-eu",
        excerpt: "What you need to know about the new compliance regulations.",
        content: "<p>The European Union continues to set the global standard for digital regulation. The upcoming year will see the enforcement of several key legislative packages that will impact any business operating in the digital single market.</p><h3>Major Legislative Acts</h3><ul><li><strong>Digital Markets Act (DMA):</strong> Targets gatekeeper platforms to ensure fair competition.</li><li><strong>Digital Services Act (DSA):</strong> Imposes new obligations on intermediaries regarding illegal content and transparency.</li><li><strong>AI Act:</strong> The world's first comprehensive AI law, categorizing risk levels for AI systems.</li></ul><p>Compliance teams should start gap analyses immediately to avoid hefty fines and operational disruptions.</p>",
        date: "2023-11-15T10:00:00",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/handshake.png",
                altText: "EU Flag"
            }
        },
        categories: {
            nodes: [
                { name: "Tax", slug: "tax", databaseId: 4 },
                { name: "Legal Insights", slug: "legal-insights", databaseId: 17 }
            ]
        }
    },
    {
        id: "post3",
        title: "The Future of Real Estate",
        slug: "future-real-estate",
        excerpt: "How remote work is reshaping the commercial real estate landscape.",
        content: "<p>The commercial real estate sector is undergoing a structural transformation as hybrid work becomes the norm. Office vacancy rates in major metropolitan areas are forcing landlords and investors to reimagine the utility of urban spaces.</p><h3>Emerging Strategies</h3><ul><li><strong>Adaptive Reuse:</strong> Converting underutilized office towers into residential units or mixed-use lifestyle centers.</li><li><strong>Amenitization:</strong> Offices are becoming destination experiences with hospitality-level amenities to attract workers.</li><li><strong>Flexible Leasing:</strong> Shorter lease terms and co-working arrangements are replacing traditional long-term commitments.</li></ul><p>Our Real Estate practice is helping clients renegotiate leases and structure joint ventures for redevelopment projects.</p>",
        date: "2023-11-10T10:00:00",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/office-meeting.png",
                altText: "Building"
            }
        },
        categories: {
            nodes: [
                { name: "Real Estate", slug: "real-estate", databaseId: 8 },
                { name: "NEON News", slug: "neon-news", databaseId: 16 }
            ]
        }
    },
    {
        id: "post4",
        title: "Tech M&A Surge",
        slug: "tech-m-and-a-surge",
        excerpt: "Why tech acquisitions are accelerating in 2024.",
        content: "<p>After a cooling period, M&A activity in the technology sector is heating up again. Lower valuations and high cash reserves among strategic buyers are creating a perfect storm for consolidation.</p><h3>Drivers of Activity</h3><ul><li><strong>Acqui-hiring:</strong> Companies are buying startups primarily for their talent, particularly in AI and cybersecurity.</li><li><strong>Market Expansion:</strong> Establishing footholds in new geographic markets via acquisition is faster than organic growth.</li><li><strong>Product Synergy:</strong> Integrating complementary tools to offer comprehensive enterprise platforms.</li></ul><p>We expect deal volume to surpass 2022 levels by Q3 of 2024.</p>",
        date: "2023-12-05T10:00:00",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/office-meeting.png",
                altText: "Tech Hub"
            }
        },
        categories: {
            nodes: [
                { name: "M&A", slug: "m-and-a", databaseId: 10 },
                { name: "Technology", slug: "technology", databaseId: 9 },
                { name: "NEON News", slug: "neon-news", databaseId: 16 }
            ]
        }
    },
    {
        id: "post5",
        title: "ESG in Corporate Finance",
        slug: "esg-corporate-finance",
        excerpt: "The growing importance of ESG metrics in finance.",
        content: "<p>Environmental, Social, and Governance (ESG) criteria are no longer optional 'nice-to-haves' but critical components of credit ratings and investment decisions. Capital markets are increasingly penalizing companies with poor ESG performance.</p><h3>Integration in Finance</h3><ul><li><strong>Green Bonds:</strong> Issuance of bonds specifically fund environmentally friendly projects.</li><li><strong>Sustainability-Linked Loans:</strong> Interest rates tied to achieving specific sustainability KPIs.</li><li><strong>Divestment:</strong> Institutional investors are divesting from industries that fail to meet net-zero targets.</li></ul><p>NEON's Finance team is assisting borrowers and lenders in structuring these innovative financial instruments.</p>",
        date: "2023-12-01T10:00:00",
        featuredImage: {
            node: {
                sourceUrl: "/images/dummy/woman-portrait.png",
                altText: "Green Finance"
            }
        },
        categories: {
            nodes: [
                { name: "Finance", slug: "finance", databaseId: 3 },
                { name: "Insights", slug: "insights", databaseId: 7 }
            ]
        }
    }
];
