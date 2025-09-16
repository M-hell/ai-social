# AI Social Management Platform

A comprehensive AI-powered social media content generation platform built with Next.js 15, featuring multi-platform content creation, user authentication, and intelligent template management for modern digital marketers and content creators.

## 🌟 Features

### Core Functionality
- **Multi-Platform Content Generation**: Create optimized content for YouTube, Instagram, TikTok, LinkedIn, and Twitter
- **AI-Powered Templates**: Pre-built templates with intelligent prompts for various content types
- **Rich Text Editor**: Advanced content editing with TipTap integration
- **User Authentication**: Secure authentication and user management with Clerk
- **Content History**: Track and manage all generated content with searchable history
- **Real-time Search**: Instant template and content filtering capabilities

### Platform-Specific Features
- **YouTube**: Video descriptions, titles, and optimization content
- **Instagram**: Post captions, story content, and engagement-focused text
- **TikTok**: Trend-aware captions and viral content suggestions
- **LinkedIn**: Professional posts, article content, and networking messages
- **Twitter**: Tweet threads, engagement posts, and viral content

### Technical Features
- **Server-Side Rendering**: Next.js 15 with App Router for optimal performance
- **Database Integration**: PostgreSQL with Prisma ORM for scalable data management
- **AI Integration**: Google Gemini AI for intelligent content generation
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Type Safety**: Full TypeScript implementation for robust development

## 🏗️ Architecture

```
ai-socialmanagement/
├── prisma/                    # Database schema and migrations
│   └── schema.prisma         # Prisma database schema
├── src/
│   ├── app/                  # Next.js 15 App Router
│   │   ├── api/             # API routes and endpoints
│   │   ├── dashboard/       # Main application dashboard
│   │   │   ├── history/     # Content generation history
│   │   │   ├── [templateSlug]/ # Dynamic template pages
│   │   │   └── _components/ # Dashboard-specific components
│   │   ├── layout.tsx       # Root layout with Clerk provider
│   │   └── page.tsx         # Landing page
│   ├── components/          # Reusable React components
│   │   ├── ui/             # Shadcn/ui components
│   │   ├── auth.tsx        # Authentication components
│   │   └── logo.tsx        # Brand components
│   ├── lib/                # Utility functions and configurations
│   │   └── content-templates.ts # AI content templates
│   └── middleware.ts        # Clerk authentication middleware
├── public/                  # Static assets
├── components.json          # Shadcn/ui configuration
└── package.json            # Project dependencies
```

## 🚀 Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - Modern component library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives

### Backend & Database
- **[Prisma](https://www.prisma.io/)** - Next-generation ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Robust relational database
- **[Clerk](https://clerk.com/)** - Complete authentication solution

### AI & Content
- **[Google Gemini AI](https://deepmind.google/technologies/gemini/)** - Advanced AI content generation
- **[TipTap](https://tiptap.dev/)** - Headless rich text editor
- **[React Icons](https://react-icons.github.io/react-icons/)** - Comprehensive icon library

### Development Tools
- **[Turbopack](https://turbo.build/pack)** - Ultra-fast development builds
- **[ESLint](https://eslint.org/)** - Code quality and consistency
- **[PostCSS](https://postcss.org/)** - CSS transformation and optimization

## 📋 Prerequisites

Before running this application, ensure you have:

- **Node.js** (v18 or higher)
- **npm**, **yarn**, or **pnpm**
- **PostgreSQL** database (local or cloud)
- **Clerk** account for authentication
- **Google AI API** key for content generation

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd ai-socialmanagement
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/ai_social_management"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key
CLERK_SECRET_KEY=sk_test_your_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Google AI
GOOGLE_AI_API_KEY=your_google_ai_api_key

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# (Optional) Seed database
npx prisma db seed
```

### 5. Start the Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🎯 Usage

### Getting Started
1. **Sign Up/Login**: Create an account using Clerk authentication
2. **Choose Template**: Select from 15+ pre-built content templates
3. **Fill Form**: Provide context and requirements for your content
4. **Generate Content**: Let AI create optimized content for your platform
5. **Edit & Export**: Use the rich text editor to refine and export content

### Content Templates Available

#### YouTube
- Video descriptions with SEO optimization
- Channel trailer scripts
- Video title suggestions
- Thumbnail text ideas

#### Instagram
- Post captions with hashtag suggestions
- Story content ideas
- Reel scripts and hooks
- Bio optimization

#### LinkedIn
- Professional post content
- Article introductions
- Networking messages
- Company updates

#### Twitter/X
- Tweet threads
- Viral content ideas
- Engagement posts
- Trending topic responses

#### TikTok
- Video captions
- Trend-aware content
- Challenge participation ideas
- Viral hooks and scripts

## 🔐 Authentication Flow

The application uses **Clerk** for comprehensive authentication:

- **Social Login**: Google, GitHub, and other OAuth providers
- **Email/Password**: Traditional authentication method
- **Magic Links**: Passwordless authentication option
- **Session Management**: Secure, persistent user sessions
- **Protected Routes**: Automatic route protection with middleware

## 💾 Database Schema

```prisma
model AIOutput {
  id           String   @id @default(uuid())
  userId       String   // Clerk user ID
  title        String?  // Content title
  description  String   // Generated content
  templateUsed String   // Template identifier
  createdAt    DateTime @default(now())
}
```

## 🎨 UI Components

Built with **Shadcn/ui** and **Radix UI** for:
- **Accessible Components**: WCAG compliant interface elements
- **Dark/Light Mode**: User preference-based theming
- **Responsive Design**: Mobile-first, adaptive layouts
- **Modern Aesthetics**: Clean, professional design system

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Environment Variables**: Add all required environment variables
3. **Database**: Ensure PostgreSQL database is accessible
4. **Deploy**: Automatic deployment on push to main branch

```bash
# Build for production
npm run build

# Start production server
npm run start
```

### Environment Variables for Production
```env
DATABASE_URL=your_production_database_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_production_clerk_key
CLERK_SECRET_KEY=your_production_clerk_secret
GOOGLE_AI_API_KEY=your_production_google_ai_key
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## 📊 Performance Features

- **Server-Side Rendering**: Optimized initial page loads
- **Static Generation**: Pre-built pages for better performance
- **Image Optimization**: Automatic image compression and resizing
- **Code Splitting**: Lazy loading for optimal bundle sizes
- **Database Optimization**: Efficient queries with Prisma
- **Caching Strategy**: Smart caching for AI-generated content

## 🛠️ Development

### Project Structure Best Practices
- **App Router**: Next.js 15 file-based routing
- **Component Organization**: Logical component hierarchy
- **Type Safety**: Comprehensive TypeScript coverage
- **Code Quality**: ESLint and Prettier configuration

### Available Scripts
```bash
npm run dev        # Start development server with Turbopack
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run postinstall # Generate Prisma client (auto-run)
```

## 🔮 Future Enhancements

- **Analytics Dashboard**: Content performance tracking
- **Team Collaboration**: Multi-user workspace support
- **Content Scheduling**: Integrated social media scheduling
- **A/B Testing**: Content variation testing
- **Custom Templates**: User-created template system
- **API Access**: Public API for third-party integrations

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Maintain component documentation
- Write meaningful commit messages
- Test new features thoroughly
- Update documentation for API changes

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the incredible React framework
- **Clerk** for seamless authentication solutions
- **Google AI** for powerful content generation capabilities
- **Prisma** for the excellent database toolkit
- **Shadcn** for the beautiful component library
- **Vercel** for the deployment platform

## 📞 Support

For support and questions:
- 📧 Email: your-email@example.com
- 💬 GitHub Issues: Create an issue for bug reports
- 📖 Documentation: Check the docs for detailed guides

---

**Built with ❤️ for modern content creators**

> Empowering digital marketers and content creators with AI-powered social media content generation across all major platforms.
