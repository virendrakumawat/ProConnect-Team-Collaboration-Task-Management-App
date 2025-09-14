# ProConnect API Generation Prompt

## Project Overview
Create a complete REST API backend for ProConnect - a team collaboration and task management application. The system supports role-based access (Admin, Project Manager, Team Member, Guest) and includes project management, task tracking, team collaboration, file sharing, and reporting features.

## Technology Stack Requirements
- Node.js with Express.js framework
- MongoDB with Mongoose ODM
- JWT for authentication middleware
- Multer for file uploads
- Socket.io for real-time features (optional)
- Validation middleware (express-validator)
- CORS enabled
- Error handling middleware

## API Requirements (80 APIs Total)

### User Management APIs (8 APIs)
1. **GET /api/users** - Get all users (Admin only)
2. **POST /api/users** - Create new user (Admin/PM)
3. **GET /api/users/:id** - Get user by ID
4. **PUT /api/users/:id** - Update user (Admin/Owner)
5. **DELETE /api/users/:id** - Delete user (Admin only)
6. **GET /api/users/profile** - Get current user profile
7. **PUT /api/users/profile** - Update current user profile
8. **POST /api/users/upload-avatar** - Upload profile picture

### Project Management APIs (12 APIs)
9. **GET /api/projects** - Get all projects with filters
10. **POST /api/projects** - Create new project (Admin/PM)
11. **GET /api/projects/:id** - Get project details
12. **PUT /api/projects/:id** - Update project (Admin/PM/Owner)
13. **DELETE /api/projects/:id** - Delete project (Admin/Owner)
14. **POST /api/projects/:id/members** - Add team member to project
15. **DELETE /api/projects/:id/members/:userId** - Remove member from project
16. **GET /api/projects/:id/tasks** - Get all tasks in project
17. **GET /api/projects/:id/activity** - Get project activity feed
18. **PUT /api/projects/:id/status** - Update project status
19. **GET /api/projects/stats** - Get project statistics
20. **GET /api/projects/my-projects** - Get user's assigned projects

### Task Management APIs (15 APIs)
21. **GET /api/tasks** - Get all tasks with filters
22. **POST /api/tasks** - Create new task
23. **GET /api/tasks/:id** - Get task details
24. **PUT /api/tasks/:id** - Update task
25. **DELETE /api/tasks/:id** - Delete task
26. **PUT /api/tasks/:id/status** - Update task status
27. **PUT /api/tasks/:id/progress** - Update task progress
28. **POST /api/tasks/:id/comments** - Add comment to task
29. **GET /api/tasks/:id/comments** - Get task comments
30. **GET /api/tasks/my-tasks** - Get user's assigned tasks
31. **GET /api/tasks/by-priority** - Get tasks grouped by priority
32. **GET /api/tasks/overdue** - Get overdue tasks
33. **POST /api/tasks/:id/time-log** - Log time for task
34. **GET /api/tasks/:id/time-logs** - Get task time logs
35. **POST /api/tasks/bulk-update** - Bulk update task status

### Team Management APIs (8 APIs)
36. **GET /api/teams** - Get all teams
37. **POST /api/teams** - Create new team (Admin/PM)
38. **GET /api/teams/:id** - Get team details
39. **PUT /api/teams/:id** - Update team (Admin/PM/Owner)
40. **DELETE /api/teams/:id** - Delete team (Admin/Owner)
41. **POST /api/teams/:id/members** - Add member to team
42. **DELETE /api/teams/:id/members/:userId** - Remove member from team
43. **GET /api/teams/:id/projects** - Get team's projects

### File Management APIs (8 APIs)
44. **GET /api/files** - Get all files with filters
45. **POST /api/files/upload** - Upload file
46. **GET /api/files/:id** - Get file details
47. **DELETE /api/files/:id** - Delete file
48. **GET /api/files/project/:projectId** - Get project files
49. **GET /api/files/task/:taskId** - Get task files
50. **POST /api/files/:id/share** - Share file with users
51. **GET /api/files/recent** - Get recently uploaded files

### Communication APIs (10 APIs)
52. **GET /api/notifications** - Get user notifications
53. **PUT /api/notifications/:id/read** - Mark notification as read
54. **PUT /api/notifications/mark-all-read** - Mark all notifications as read
55. **GET /api/inbox/messages** - Get inbox messages
56. **POST /api/inbox/messages** - Send message
57. **GET /api/inbox/conversations** - Get conversations
58. **POST /api/comments** - Create comment
59. **GET /api/comments/task/:taskId** - Get task comments
60. **GET /api/comments/project/:projectId** - Get project comments
61. **DELETE /api/comments/:id** - Delete comment

### Calendar & Activity APIs (6 APIs)
62. **GET /api/calendar/events** - Get calendar events
63. **POST /api/calendar/events** - Create calendar event
64. **PUT /api/calendar/events/:id** - Update calendar event
65. **DELETE /api/calendar/events/:id** - Delete calendar event
66. **GET /api/activity/feed** - Get activity feed
67. **GET /api/activity/user/:userId** - Get user activity

### Reports & Analytics APIs (8 APIs) - Admin/PM Only
68. **GET /api/reports/dashboard-stats** - Get dashboard statistics
69. **GET /api/reports/project-progress** - Get project progress report
70. **GET /api/reports/user-productivity** - Get user productivity report
71. **GET /api/reports/task-analytics** - Get task analytics
72. **GET /api/reports/time-tracking** - Get time tracking report
73. **GET /api/reports/team-performance** - Get team performance report
74. **POST /api/reports/generate** - Generate custom report
75. **GET /api/reports/export/:type** - Export reports (PDF/Excel)

### Settings & Configuration APIs (5 APIs)
76. **GET /api/settings/user** - Get user settings
77. **PUT /api/settings/user** - Update user settings
78. **GET /api/settings/system** - Get system settings (Admin only)
79. **PUT /api/settings/system** - Update system settings (Admin only)
80. **GET /api/integrations** - Get available integrations

## Database Models

### User Model
```javascript
{
  _id: ObjectId,
  firstName: String (required),
  lastName: String (required),
  email: String (required, unique),
  phoneNumber: String,
  role: String (enum: ['admin', 'project_manager', 'team_member', 'guest']),
  profilePic: String,
  dob: Date,
  gender: String (enum: ['male', 'female', 'other']),
  status: String (enum: ['active', 'inactive', 'pending'], default: 'active'),
  lastLogin: Date,
  settings: {
    theme: String (default: 'light'),
    notifications: Boolean (default: true),
    language: String (default: 'en')
  },
  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

### Project Model
```javascript
{
  _id: ObjectId,
  title: String (required),
  description: String,
  status: String (enum: ['active', 'completed', 'on_hold', 'archived'], default: 'active'),
  priority: String (enum: ['low', 'medium', 'high', 'critical'], default: 'medium'),
  progress: Number (default: 0, min: 0, max: 100),
  startDate: Date (default: Date.now),
  dueDate: Date,
  createdBy: ObjectId (ref: 'User', required),
  teamMembers: [ObjectId (ref: 'User')],
  tasks: [ObjectId (ref: 'Task')],
  files: [ObjectId (ref: 'File')],
  budget: Number,
  tags: [String],
  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

### Task Model
```javascript
{
  _id: ObjectId,
  title: String (required),
  description: String,
  assignee: ObjectId (ref: 'User'),
  project: ObjectId (ref: 'Project', required),
  priority: String (enum: ['low', 'medium', 'high', 'critical'], default: 'medium'),
  status: String (enum: ['todo', 'in_progress', 'review', 'completed'], default: 'todo'),
  progress: Number (default: 0, min: 0, max: 100),
  dueDate: Date,
  estimatedHours: Number,
  actualHours: Number (default: 0),
  createdBy: ObjectId (ref: 'User', required),
  comments: [ObjectId (ref: 'Comment')],
  files: [ObjectId (ref: 'File')],
  tags: [String],
  dependencies: [ObjectId (ref: 'Task')],
  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

### Team Model
```javascript
{
  _id: ObjectId,
  name: String (required),
  description: String,
  members: [ObjectId (ref: 'User')],
  projects: [ObjectId (ref: 'Project')],
  createdBy: ObjectId (ref: 'User', required),
  avatar: String,
  settings: {
    isPrivate: Boolean (default: false),
    allowMemberInvite: Boolean (default: true)
  },
  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

### File Model
```javascript
{
  _id: ObjectId,
  filename: String (required),
  originalName: String (required),
  mimetype: String (required),
  size: Number (required),
  path: String (required),
  uploadedBy: ObjectId (ref: 'User', required),
  project: ObjectId (ref: 'Project'),
  task: ObjectId (ref: 'Task'),
  sharedWith: [ObjectId (ref: 'User')],
  isPublic: Boolean (default: false),
  tags: [String],
  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

### Notification Model
```javascript
{
  _id: ObjectId,
  recipient: ObjectId (ref: 'User', required),
  title: String (required),
  message: String (required),
  type: String (enum: ['task', 'project', 'system', 'mention', 'deadline'], required),
  read: Boolean (default: false),
  relatedId: ObjectId,
  relatedType: String (enum: ['task', 'project', 'user', 'team']),
  actionUrl: String,
  createdAt: Date (default: Date.now)
}
```

### Comment Model
```javascript
{
  _id: ObjectId,
  content: String (required),
  author: ObjectId (ref: 'User', required),
  task: ObjectId (ref: 'Task'),
  project: ObjectId (ref: 'Project'),
  mentions: [ObjectId (ref: 'User')],
  attachments: [ObjectId (ref: 'File')],
  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

### TimeLog Model
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: 'User', required),
  task: ObjectId (ref: 'Task', required),
  project: ObjectId (ref: 'Project', required),
  hours: Number (required),
  description: String,
  date: Date (default: Date.now),
  createdAt: Date (default: Date.now)
}
```

### CalendarEvent Model
```javascript
{
  _id: ObjectId,
  title: String (required),
  description: String,
  startDate: Date (required),
  endDate: Date (required),
  type: String (enum: ['task', 'meeting', 'deadline', 'milestone'], required),
  relatedId: ObjectId,
  attendees: [ObjectId (ref: 'User')],
  createdBy: ObjectId (ref: 'User', required),
  isAllDay: Boolean (default: false),
  reminder: Number, // minutes before event
  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

## Implementation Requirements

### 1. Middleware Setup
- JWT authentication middleware for protected routes
- Role-based authorization middleware
- Input validation middleware using express-validator
- Error handling middleware with proper HTTP status codes
- File upload middleware using multer
- CORS configuration
- Rate limiting middleware

### 2. Route Structure
```
/api
  /users
  /projects
  /tasks
  /teams
  /files
  /notifications
  /inbox
  /comments
  /calendar
  /activity
  /reports
  /settings
```

### 3. Response Format
```javascript
// Success Response
{
  success: true,
  data: {},
  message: "Success message",
  pagination: { // for paginated responses
    page: 1,
    limit: 10,
    total: 100,
    pages: 10
  }
}

// Error Response
{
  success: false,
  error: "Error message",
  details: {} // validation errors or additional info
}
```

### 4. Features to Implement
- Pagination for list endpoints (default: 10 items per page)
- Search and filtering capabilities
- Sorting options
- Field selection (populate specific fields)
- Soft delete for important entities
- Activity logging for audit trail
- Real-time notifications (optional with Socket.io)
- File upload with size and type validation
- Data validation and sanitization
- Proper error handling and logging

### 5. Security Requirements
- Input validation and sanitization
- SQL injection prevention (using Mongoose)
- XSS protection
- Rate limiting
- File upload security (type and size validation)
- Proper error messages (don't expose sensitive info)

### 6. Performance Considerations
- Database indexing on frequently queried fields
- Pagination for large datasets
- Efficient database queries with proper population
- Caching for frequently accessed data (optional)

## Role-Based Access Control

### Admin
- Full access to all APIs
- User management capabilities
- System settings management
- All reports and analytics

### Project Manager
- Project creation and management
- Team management
- Task assignment and tracking
- Project reports
- User invitation (limited)

### Team Member
- View assigned projects and tasks
- Update own tasks and progress
- File sharing within projects
- Basic notifications and activity feed

### Guest
- Read-only access to assigned projects
- View tasks (cannot modify)
- Basic file access
- Limited notifications

## Generate the following files:
1. **server.js** - Main server file with Express setup
2. **routes/** - All route files organized by feature
3. **models/** - All Mongoose models
4. **middleware/** - Authentication, authorization, validation middleware
5. **controllers/** - Business logic for each route
6. **utils/** - Helper functions and utilities
7. **config/** - Database and environment configuration
8. **package.json** - Dependencies and scripts

Please create a complete, production-ready API backend with proper error handling, validation, and security measures.