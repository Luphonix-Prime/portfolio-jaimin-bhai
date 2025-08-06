import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type Contact, type InsertContact, type GalleryItem, type InsertGalleryItem } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  
  getGalleryItems(): Promise<GalleryItem[]>;
  createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<string, BlogPost>;
  private contacts: Map<string, Contact>;
  private galleryItems: Map<string, GalleryItem>;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.contacts = new Map();
    this.galleryItems = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample blog posts
    const samplePosts: BlogPost[] = [
      {
        id: randomUUID(),
        title: "Zero Trust Architecture: Implementation Guide",
        slug: "zero-trust-architecture-implementation-guide",
        excerpt: "Learn how to implement zero trust security principles in your organization with practical steps and best practices.",
        content: `# Zero Trust Architecture: Implementation Guide

Zero Trust is a security framework that requires all users, whether in or outside the organization's network, to be authenticated, authorized, and continuously validated for security configuration and posture before being granted or keeping access to applications and data.

## Core Principles

1. **Never Trust, Always Verify**: Don't assume anything inside the network is safe
2. **Least Privilege Access**: Give users only the access they need
3. **Assume Breach**: Act as if attackers are already inside your network

## Implementation Steps

### 1. Inventory Your Assets
- Identify all devices, users, and applications
- Map data flows and access patterns
- Document current security controls

### 2. Map Transaction Flows
- Understand how data moves through your network
- Identify critical assets and pathways
- Document trust relationships

### 3. Create a Zero Trust Policy
- Define access policies based on identity
- Implement micro-segmentation
- Set up continuous monitoring

## Best Practices

- Start with your most critical assets
- Implement gradually to avoid disruption
- Monitor and adjust policies regularly
- Train your team on new procedures

Zero Trust isn't a product you can buy – it's a holistic approach to security that requires careful planning and implementation.`,
        coverImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        tags: ["security", "zero-trust", "architecture"],
        author: "Jaimin Somani",
        authorLink: "https://linkedin.com/in/jaimin-somani",
        readTime: "5 min read",
        createdAt: new Date("2023-12-15"),
        updatedAt: new Date("2023-12-15"),
      },
      {
        id: randomUUID(),
        title: "Advanced Penetration Testing Techniques",
        slug: "advanced-penetration-testing-techniques",
        excerpt: "Master advanced penetration testing methodologies with hands-on examples and real-world scenarios.",
        content: `# Advanced Penetration Testing Techniques

Penetration testing is a crucial component of any comprehensive security program. This guide covers advanced techniques used by professional security testers.

## Reconnaissance Phase

### Passive Information Gathering
- OSINT techniques
- Social media reconnaissance
- DNS enumeration
- Network mapping

### Active Scanning
- Port scanning strategies
- Service enumeration
- Vulnerability identification
- Network topology mapping

## Exploitation Techniques

### Web Application Testing
- SQL injection variants
- Cross-site scripting (XSS)
- Authentication bypass
- Session management flaws

### Network Penetration
- Lateral movement techniques
- Privilege escalation
- Persistence mechanisms
- Anti-forensics methods

## Post-Exploitation

### Data Exfiltration
- Covert channels
- Data compression and encryption
- Staging areas
- Clean-up procedures

### Reporting
- Executive summaries
- Technical findings
- Risk ratings
- Remediation recommendations

Remember: Always ensure you have proper authorization before conducting any penetration testing activities.`,
        coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        tags: ["penetration-testing", "tutorials", "security"],
        author: "Jaimin Somani",
        authorLink: "https://linkedin.com/in/jaimin-somani",
        readTime: "8 min read",
        createdAt: new Date("2023-12-10"),
        updatedAt: new Date("2023-12-10"),
      },
      {
        id: randomUUID(),
        title: "AI in Cybersecurity: 2024 Trends",
        slug: "ai-in-cybersecurity-2024-trends",
        excerpt: "Explore how artificial intelligence is revolutionizing cybersecurity practices and threat detection capabilities.",
        content: `# AI in Cybersecurity: 2024 Trends

Artificial Intelligence is transforming the cybersecurity landscape. Here are the key trends shaping the industry in 2024.

## Machine Learning in Threat Detection

### Behavioral Analytics
- User behavior analysis
- Anomaly detection
- Risk scoring
- Adaptive authentication

### Automated Response
- Incident response automation
- Threat hunting automation
- Vulnerability prioritization
- Patch management

## AI-Powered Security Tools

### Next-Generation SIEM
- Intelligent log analysis
- Correlation engine improvements
- Predictive analytics
- False positive reduction

### Endpoint Detection and Response
- Behavioral-based detection
- Memory analysis
- Process monitoring
- Automated containment

## Challenges and Considerations

### Adversarial AI
- AI-powered attacks
- Model poisoning
- Evasion techniques
- Defense strategies

### Privacy and Ethics
- Data protection
- Algorithmic bias
- Transparency requirements
- Regulatory compliance

## Future Outlook

The integration of AI in cybersecurity will continue to evolve, offering both opportunities and challenges for security professionals.`,
        coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        tags: ["ai", "cybersecurity", "trends", "news"],
        author: "Jaimin Somani",
        authorLink: "https://linkedin.com/in/jaimin-somani",
        readTime: "6 min read",
        createdAt: new Date("2023-12-05"),
        updatedAt: new Date("2023-12-05"),
      },
    ];

    samplePosts.forEach(post => {
      this.blogPosts.set(post.slug, post);
    });

    // Sample gallery items
    const sampleGalleryItems: GalleryItem[] = [
      {
        id: randomUUID(),
        title: "Enterprise Security Workshop",
        description: "Advanced threat detection training",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "workshops",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "CyberSec Conference 2023",
        description: "Keynote on emerging threats",
        imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "conferences",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Corporate Training Session",
        description: "Security awareness program",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=700",
        category: "training",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Security Assessment Workshop",
        description: "Hands-on vulnerability testing",
        imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "workshops",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Industry Summit 2023",
        description: "Networking with security professionals",
        imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "conferences",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Penetration Testing Workshop",
        description: "Ethical hacking methodologies",
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "workshops",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Cloud Security Training",
        description: "AWS and Azure security best practices",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "training",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "DevSecOps Conference",
        description: "Security in CI/CD pipelines",
        imageUrl: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "conferences",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "SOC Analyst Training",
        description: "24/7 security operations center",
        imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=700",
        category: "training",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Incident Response Workshop",
        description: "Crisis management and forensics",
        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "workshops",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "AI Security Summit",
        description: "Machine learning threat detection",
        imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "conferences",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Network Security Fundamentals",
        description: "Firewall and IDS configuration",
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "training",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Cryptography Workshop",
        description: "Modern encryption techniques",
        imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "workshops",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Zero Trust Conference",
        description: "Never trust, always verify",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "conferences",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Mobile Security Training",
        description: "iOS and Android security testing",
        imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=700",
        category: "training",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "IoT Security Workshop",
        description: "Securing connected devices",
        imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "workshops",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Threat Intelligence Conference",
        description: "Advanced persistent threats analysis",
        imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "conferences",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Red Team Operations",
        description: "Advanced attack simulation",
        imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "training",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Certification Program",
        description: "Graduation ceremony for security analysts",
        imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "training",
        createdAt: new Date(),
      },
    ];

    sampleGalleryItems.forEach(item => {
      this.galleryItems.set(item.id, item);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(slug);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const now = new Date();
    const post: BlogPost = { 
      ...insertPost, 
      id, 
      tags: insertPost.tags || [],
      createdAt: now, 
      updatedAt: now 
    };
    this.blogPosts.set(post.slug, post);
    return post;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getGalleryItems(): Promise<GalleryItem[]> {
    return Array.from(this.galleryItems.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createGalleryItem(insertItem: InsertGalleryItem): Promise<GalleryItem> {
    const id = randomUUID();
    const item: GalleryItem = { 
      ...insertItem, 
      id, 
      createdAt: new Date() 
    };
    this.galleryItems.set(id, item);
    return item;
  }
}

export const storage = new MemStorage();
