import { Icons } from "@/components/icons";
import { FileTextIcon, HomeIcon, icons, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { Redis } from "@/components/ui/svgs/redis"
import { NestJS } from "@/components/ui/svgs/nestjs";

export const DATA = {
  name: "Devi Sri Sai Charan",
  initials: "N",
  url: "https://dillion.io",
  location: "Vijayawada, Andhra Pradesh",
  locationLink: "https://maps.app.goo.gl/XH5Zz7i4u29RyycD9",
  description:
    "Broke production, fixed production, added it to my resume. They call that an internship.",
  summary:
    "I'm a final-year Computer Engineering student at SRM University AP, graduating in 2026 with a 9.0 GPA. I spent the last six months at [Kelp Global](https://kelpglobal.com) building production features — cutting API response times by 7x and shipping fixes across a full TypeScript stack. Outside of work, I contribute to open source: I've merged fixes in [Twenty CRM](https://github.com/twentyhq/twenty) (a YC S23 CRM used by thousands) and [Bruno](https://github.com/usebruno/bruno), an open source API client. I enjoy debugging systems, understanding why things break, and writing code that's easy for the next person to follow. Currently looking for full-time SDE or Full Stack Developer roles starting mid-2026.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Go", icon: Golang },
    { name: "Typescript", icon: Typescript },
    { name: "Java", icon: Java },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Redis", icon: Redis },
    { name: "NestJS", icon: NestJS },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: '/resume.pdf', icon: FileTextIcon, label: "Resume" },
  ],
  contact: {
    email: "devisrisaicharan@gmail.com",
    tel: "+91-9063799163",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/DeviSriSaiCharan",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/devi-sri-sai-charan-neelapu-719362255/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:devisrisaicharan@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Kelp Gloabls",
      href: "https://www.kelpglobal.com/",
      badges: ["Internship"],
      location: "Mumbai, India",
      title: "Full Stack Developer Intern",
      logoUrl: "/kelp.jpeg",
      start: "Jan 2026",
      end: "Jun 2026",
      description:
        "Worked on a production SaaS platform built with Angular, NestJS, TypeScript, and PostgreSQL. Cut API response times by 7x (700ms → <100ms) by identifying and fixing slow database queries with targeted indexing. Refactored a data processing bottleneck from O(N²) to O(N) using hash maps, and parallelized independent operations to improve throughput. Fixed sluggish list rendering in Angular by introducing virtual and infinite scrolling for large datasets. Also tightened up authentication security with salted password hashing, and contributed 30+ pull requests across the codebase.",
    },
  ],

  openSource: [
    {
      company: "Twenty CRM",
      href: "https://github.com/twentyhq/twenty",
      badges: ["Open Source", "YC S23"],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/twenty.png",
      start: "2026",
      end: "Present",
      description:
        "Contributed bug fixes to Twenty, a YC S23-backed open source CRM. Fixed a scroll regression in the timeline side panel — when a user scrolled down to load more activities, the page would jump back to the top every time. Solved this by separating the initial fetch loading state from the pagination loading state, so the UI knows when to show a skeleton vs. a 'loading more' indicator. Also fixed a broken delete flow where removing a record from a side panel would incorrectly redirect the user away from their current page. After fixing the navigation, discovered and fixed a second issue where deleted records left ghost chips behind in the UI that only disappeared on a full page refresh — solved with a Jotai-based state fallback that survives component remounts during bulk deletes.",
      prs: [
        {
          label: "PR-#20896",
          href: "https://github.com/twentyhq/twenty/pull/20896",
        },
        {
          label: "PR-#21391",
          href: "https://github.com/twentyhq/twenty/pull/21391",
        }
      ],
    },
    {
      company: "Bruno",
      href: "https://github.com/usebruno/bruno",
      badges: ["Open Source"],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/bruno.png",
      start: "2026",
      end: "Present",
      description:
        "Fixed a misleading success notification in the workspace open flow. The app was showing a 'Workspace opened successfully' toast even when the user cancelled the folder picker without selecting anything. Added a check to confirm a workspace was actually selected before triggering the success message.",
      prs: [
        {
          label: "#PR-8096",
          href: "https://github.com/usebruno/bruno/pull/8096",
        },
      ],
    },
  ],

  education: [
    {
      school: "SRM University, Andhra Pradesh",
      href: "https://www.srmap.edu.in/",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "./srm.jpeg",
      start: "2022",
      end: "2026",
    },
    {
      school: "Sri Sarada Educational Institution",
      href: "https://www.saradaedu.com/",
      degree: "Intermediate (MPC)",
      logoUrl: "./sarada_clg.jpeg",
      start: "2020",
      end: "2022",
    }
  ],
  projects: [
    {
      title: "URL Health Checker CLI",
      href: "https://github.com/DeviSriSaiCharan/Concurrent-URL-Health-Checker",
      dates: "Jun 2026 - Jun 2026",
      active: true,
      description:
        "A command-line tool that checks the health of 100K+ URLs concurrently. Validates websites and API endpoints with live HTTP requests and reports which ones are up or down. Built a worker pool with Go's goroutines and channals brought execution time down from ~24 minutes to ~27 seconds (50x faster). Also rewrote the file reader to stream input line by line instead of loading everything into memory at once, cutting memory usage by ~99.8%.",
      technologies: [
        "Go", "Goroutines", "Channals", "Worker Pools"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/DeviSriSaiCharan/Concurrent-URL-Health-Checker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "./url-health-checker.mp4",
      isInProgress: false,
    },
  ],
} as const;
