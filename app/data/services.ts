import {
    FileText,
    Shield,
    CreditCard,
    Users,
    TrendingUp,
    RefreshCw,
    Search,
    FileCheck,
    DollarSign,
    BarChart,
    Settings,
    ClipboardList,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
    icon: LucideIcon;
    title: string;
    slug: string;
    description: string;
    features: string[];
    color: string;
    detailedContent?: string;
};

export type ProcessStep = {
    step: string;
    title: string;
    desc: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
    {
        step: "1",
        title: "Assessment",
        desc: "We analyze your current billing processes and identify areas for improvement",
    },
    {
        step: "2",
        title: "Setup",
        desc: "Seamless integration with your existing systems and staff training",
    },
    {
        step: "3",
        title: "Implementation",
        desc: "Full-scale billing operations with dedicated account management",
    },
    {
        step: "4",
        title: "Optimization",
        desc: "Continuous monitoring and optimization for maximum performance",
    },
];

export const SERVICES: Service[] = [
    {
        icon: Users,
        title: "Insurance Credentialing & Enrollment",
        slug: "credentialing",
        description:
            "Complete provider enrollment and credentialing services with major insurance networks",
        features: [
            "Provider enrollment with major networks",
            "Credentialing management and maintenance",
            "Network participation monitoring",
            "Re-credentialing services",
        ],
        color: "blue",
        detailedContent: "Our comprehensive credentialing services ensure that your practice remains compliant and in-network with the insurance providers your patients use most. We handle the entire application process, follow-ups, and regular re-credentialing cycles.",
    },
    {
        icon: Search,
        title: "Prior Authorization Verification",
        slug: "prior-authorization",
        description:
            "Streamlined prior authorization process to prevent claim delays and denials",
        features: [
            "Pre-auth verification and tracking",
            "Status monitoring and reporting",
            "Documentation management for medical necessity",
        ],
        color: "teal",
        detailedContent: "Don't let missing authorizations delay care or lead to denials. Our team proactively verifies requirements for all upcoming appointments and procedures, securing necessary approvals before the patient arrives.",
    },
    {
        icon: Shield,
        title: "Insurance Eligibility Verification",
        slug: "eligibility-verification",
        description:
            "Real-time insurance verification to ensure coverage before services",
        features: [
            "Real-time eligibility verification",
            "Coverage and benefit analysis",
            "Patient responsibility estimation",
        ],
        color: "teal",
        detailedContent: "Verify patient coverage in seconds. We provide detailed benefit breakdowns, including deductibles, co-pays, and co-insurance, so you can collect from patients accurately at the time of service.",
    },
    {
        icon: FileText,
        title: "Medical Billing and Coding",
        slug: "medical-billing",
        description:
            "Expert coding and billing services ensuring maximum reimbursement rates",
        features: [
            "ICD-10 & CPT coding expertise",
            "Accurate claim preparation",
            "Compliance review and auditing",
        ],
        color: "navy",
        detailedContent: "Our expert coders ensure every encounter is documented and billed at the most appropriate level. We stay up-to-date with changing regulations to maximize your revenue while maintaining strict compliance.",
    },
    {
        icon: RefreshCw,
        title: "Claims Submission and Follow-up",
        slug: "claims-submission",
        description:
            "Timely claim submission with persistent follow-up for maximum collections",
        features: [
            "Electronic claim submission",
            "Proactive status monitoring",
            "Aggressive denial resolution",
        ],
        color: "amber",
        detailedContent: "We don't just 'submit' claims; we manage them to completion. Our team follows up on every outstanding claim to ensure timely payment and resolves any issues before they become aged accounts receivable.",
    },
    {
        icon: CreditCard,
        title: "Patient Billing and Collections",
        slug: "patient-billing",
        description:
            "Professional patient billing services with compassionate collection practices",
        features: [
            "Patient statements and invoicing",
            "Flexible payment plan management",
            "Compassionate collection services",
        ],
        color: "teal",
        detailedContent: "Maintain positive patient relationships with our professional billing services. We provide clear statements and support patients through payment options, ensuring your practice gets paid while patients feel respected.",
    },
    {
        icon: TrendingUp,
        title: "Revenue Cycle Management",
        slug: "revenue-cycle",
        description:
            "Complete revenue cycle optimization from patient registration to final payment",
        features: [
            "End-to-end RCM management",
            "Performance analytics and KPIs",
            "Process optimization strategies",
        ],
        color: "navy",
        detailedContent: "Optimize your entire financial workflow. We analyze every touchpoint of your revenue cycle to identify bottlenecks and implement efficiencies that improve your bottom line.",
    },
    {
        icon: FileCheck,
        title: "Denial Management",
        slug: "denial-management",
        description:
            "Comprehensive denial management with detailed analysis and resolution",
        features: [
            "Detailed denial root cause analysis",
            "Expert appeal preparation",
            "Systemic resolution strategies",
        ],
        color: "teal",
        detailedContent: "Turn denials into revenue. Our specialists analyze the root causes of every denial, preparing expert appeals and implementing processes to prevent similar issues from occurring in the future.",
    },
    {
        icon: DollarSign,
        title: "Electronic Claims Submission",
        slug: "electronic-claims",
        description:
            "Fast and accurate electronic claims processing with real-time tracking",
        features: [
            "Secure EDI submission",
            "Real-time tracking dashboards",
            "Immediate error correction",
        ],
        color: "teal",
        detailedContent: "Leverage state-of-the-art EDI technology for lightning-fast submission. Our electronic processing minimizes errors and significantly reduces the time between service and payment.",
    },
    {
        icon: Settings,
        title: "Code Optimization",
        slug: "code-optimization",
        description:
            "Advanced coding optimization to maximize reimbursement opportunities",
        features: [
            "In-depth code analysis",
            "Clinical documentation improvement",
            "Revenue enhancement strategies",
        ],
        color: "amber",
        detailedContent: "Are you leaving money on the table? We review your most frequent coding patterns to ensure you're capturing all eligible revenue through optimized documentation and code selection.",
    },
    {
        icon: BarChart,
        title: "Managed Care Contract Analysis",
        slug: "contract-analysis",
        description:
            "Detailed contract analysis and negotiation support for better rates",
        features: [
            "Comprehensive contract review",
            "Comparative rate analysis",
            "Payer negotiation support",
        ],
        color: "teal",
        detailedContent: "Ensure your contracts accurately reflect the value of your services. We analyze your payer agreements and benchmark rates to provide the data you need for successful contract renewals.",
    },
    {
        icon: ClipboardList,
        title: "Full Practice Management",
        slug: "practice-management",
        description:
            "Complete practice management services including scheduling and administration",
        features: [
            "Practice workflow optimization",
            "Administrative support services",
            "Staff training and coordination",
        ],
        color: "navy",
        detailedContent: "Focus on your patients while we manage the business. From front-office workflow to administrative oversight, we provide the leadership and support needed to run a successful medical practice.",
    },
    {
        icon: BarChart,
        title: "Customized Reporting",
        slug: "reporting",
        description:
            "Detailed analytics and reporting tailored to your practice's specific needs",
        features: [
            "Custom business intelligence dashboards",
            "Practice performance metrics",
            "Financial trend analysis and forecasting",
        ],
        color: "teal",
        detailedContent: "Make data-driven decisions with confidence. We provide intuitive reports and dashboards that give you a clear view of your practice's financial health and operational performance.",
    },
];
