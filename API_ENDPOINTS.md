# Task Management Backend API Documentation

## Base URL: `http://localhost:5000/api`

---

## 🔐 Authentication APIs
**Base Route: `/auth`**

```
POST /api/auth/register          // Register new user
POST /api/auth/login             // User login
POST /api/auth/logout            // User logout  
GET  /api/auth/me                // Get current authenticated user info
```

---

## 👥 User Management APIs
**Base Route: `/users`**

### Public Routes (No Auth Required)
```
POST /api/users/signup           // User registration
POST /api/users/login            // User login
POST /api/users/forgot-password  // Request password reset OTP
POST /api/users/verify-otp       // Verify OTP for password reset
POST /api/users/reset-password   // Reset password with OTP
```

### Protected Routes (Auth Required)
```
GET  /api/users/profile          // Get current user profile
PUT  /api/users/profile          // Update current user profile
POST /api/users/upload-avatar    // Upload profile picture
GET  /api/users/:id              // Get user by ID
```

### Admin Only Routes
```
GET    /api/users/               // Get all users (Admin only)
POST   /api/users/               // Create new user (Admin/PM only)
PUT    /api/users/:id            // Update user (Admin only)
DELETE /api/users/:id            // Delete user (Admin only)
```

---

## 📁 Project Management APIs
**Base Route: `/projects`**

### All Routes Require Authentication
```
GET    /api/projects/            // Get all projects user has access to
GET    /api/projects/my-projects // Get current user's projects
GET    /api/projects/stats       // Get project statistics
GET    /api/projects/:id         // Get specific project details
GET    /api/projects/:id/tasks   // Get all tasks in a project
GET    /api/projects/:id/activity // Get project activity log
```

### Admin/Project Manager Only
```
POST   /api/projects/            // Create new project
PUT    /api/projects/:id         // Update project details
PUT    /api/projects/:id/status  // Update project status
DELETE /api/projects/:id         // Delete project (Admin only)
```

### Project Member Management
```
POST   /api/projects/:id/members        // Add member to project
DELETE /api/projects/:id/members/:userId // Remove member from project
```

---

## ✅ Task Management APIs
**Base Route: `/tasks`**

### All Routes Require Authentication
```
POST   /api/tasks/               // Create new task
GET    /api/tasks/               // Get all tasks for current user
GET    /api/tasks/my-tasks       // Get current user's assigned tasks
GET    /api/tasks/overdue        // Get overdue tasks
GET    /api/tasks/completed      // Get completed tasks
GET    /api/tasks/:id            // Get specific task details
PUT    /api/tasks/:id            // Update task
PUT    /api/tasks/:id/status     // Update task status only
PUT    /api/tasks/:id/assign     // Assign task to user
DELETE /api/tasks/:id            // Delete task
POST   /api/tasks/:id/attachments // Add attachment to task
DELETE /api/tasks/:id/attachments/:attachmentId // Remove attachment
```

---

## 👨‍👩‍👧‍👦 Team Management APIs
**Base Route: `/teams`**

### All Routes Require Authentication
```
POST   /api/teams/               // Create new team
GET    /api/teams/               // Get all teams
GET    /api/teams/:id            // Get specific team details
PUT    /api/teams/:id            // Update team
DELETE /api/teams/:id            // Delete team
GET    /api/teams/:id/projects   // Get team's projects
```

### Team Member Management
```
POST   /api/teams/:id/members        // Add member to team
DELETE /api/teams/:id/members/:userId // Remove member from team
```

---

## 📅 Calendar APIs
**Base Route: `/calendar`**

### All Routes Require Authentication
```
POST   /api/calendar/            // Create calendar event
GET    /api/calendar/            // Get calendar events
GET    /api/calendar/:id         // Get specific calendar event
PUT    /api/calendar/:id         // Update calendar event
DELETE /api/calendar/:id         // Delete calendar event
GET    /api/calendar/month/:year/:month // Get events for specific month
GET    /api/calendar/week/:date  // Get events for specific week
```

---

## 💬 Comments APIs
**Base Route: `/comments`**

### All Routes Require Authentication
```
POST /api/comments/              // Create comment on task/project
GET  /api/comments/task/:taskId  // Get all comments for a task
GET  /api/comments/project/:projectId // Get all comments for a project
PUT  /api/comments/:id           // Update comment
DELETE /api/comments/:id         // Delete comment
POST /api/comments/:id/reply     // Reply to a comment
```

---

## 🔔 Notifications APIs
**Base Route: `/notifications`**

### All Routes Require Authentication
```
GET /api/notifications/          // Get user notifications
PUT /api/notifications/:id/read  // Mark specific notification as read
PUT /api/notifications/read-all  // Mark all notifications as read
```

---

## 📊 Dashboard APIs
**Base Route: `/dashboard`**

### Requires Authentication
```
GET /api/dashboard/              // Get dashboard overview data
GET /api/dashboard/stats         // Get dashboard statistics
GET /api/dashboard/recent-activity // Get recent activity
GET /api/dashboard/upcoming-tasks // Get upcoming tasks
GET /api/dashboard/project-summary // Get project summary
```

---

## 📎 File Management APIs
**Base Route: `/files`**

### All Routes Require Authentication
```
POST /api/files/upload           // Upload file (multipart/form-data)
GET  /api/files/                 // Get user's files
GET  /api/files/:id/download     // Download file
POST /api/files/:id/share        // Share file with others
DELETE /api/files/:id            // Delete file
```

---

## 📈 Reports APIs
**Base Route: `/reports`** 
### Admin/Project Manager Only

```
GET  /api/reports/dashboard-stats    // Get dashboard statistics
GET  /api/reports/project-progress   // Get project progress reports
GET  /api/reports/user-productivity  // Get user productivity metrics
GET  /api/reports/task-analytics     // Get task analytics
GET  /api/reports/time-tracking      // Get time tracking data
GET  /api/reports/team-performance   // Get team performance metrics
POST /api/reports/generate           // Generate custom report
GET  /api/reports/export/:type       // Export report (PDF/Excel)
```

---

## ⚙️ Settings APIs
**Base Route: `/settings`**

### User Settings (Auth Required)
```
GET /api/settings/user           // Get user preferences
PUT /api/settings/user           // Update user preferences
```

### System Settings (Admin Only)
```
GET /api/settings/system         // Get system settings
PUT /api/settings/system         // Update system settings
```

---

## 📱 Activity Feed APIs
**Base Route: `/activity`**

### All Routes Require Authentication
```
GET /api/activity/feed           // Get activity feed for dashboard
GET /api/activity/user/:userId   // Get specific user's activity
GET /api/activity/project/:projectId // Get project activity
GET /api/activity/team/:teamId   // Get team activity
```

---

## 📨 Inbox/Messages APIs
**Base Route: `/inbox`**

### All Routes Require Authentication
```
GET  /api/inbox/messages         // Get user messages
POST /api/inbox/messages         // Send new message
GET  /api/inbox/conversations    // Get user conversations
```

---

## 🔑 Authentication Headers

For all protected routes, include:
```
Authorization: Bearer <your_jwt_token>
Content-Type: application/json
```

For file uploads:
```
Authorization: Bearer <your_jwt_token>
Content-Type: multipart/form-data
```

---

## 📝 Request Body Examples

### User Registration
```json
{
  "firstName": "John",
  "lastName": "Doe", 
  "email": "john@example.com",
  "password": "password123"
}
```

### User Login
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Create Project
```json
{
  "title": "New Project",
  "description": "Project description",
  "dueDate": "2024-12-31T23:59:59.000Z"
}
```

### Create Task
```json
{
  "title": "Task title",
  "project": "project_id_here",
  "dueDate": "2024-12-31T23:59:59.000Z"
}
```

### Create Team
```json
{
  "name": "Development Team",
  "description": "Frontend development team"
}
```

### Create Comment
```json
{
  "content": "This is a comment",
  "task": "task_id_here",
  "project": "project_id_here"
}
```

### Create Calendar Event
```json
{
  "title": "Team Meeting",
  "description": "Weekly team sync",
  "startDate": "2024-01-15T10:00:00.000Z",
  "endDate": "2024-01-15T11:00:00.000Z",
  "type": "meeting",
  "attendees": ["user_id_1", "user_id_2"]
}
```

### Update Task Status
```json
{
  "status": "completed"
}
```

### Assign Task
```json
{
  "assignedTo": "user_id_here"
}
```

---

## 🚨 Error Response Format

All APIs return errors in this format:
```json
{
  "success": false,
  "error": "Error message",
  "details": [] // Validation errors if any
}
```

## ✅ Success Response Format

All APIs return success responses in this format:
```json
{
  "success": true,
  "data": {}, // Response data
  "message": "Success message"
}
```

---

## 📋 Status Codes

- `200` - OK (Success)
- `201` - Created (Resource created successfully)
- `400` - Bad Request (Invalid input)
- `401` - Unauthorized (Authentication required)
- `403` - Forbidden (Access denied)
- `404` - Not Found (Resource not found)
- `409` - Conflict (Resource already exists)
- `422` - Unprocessable Entity (Validation errors)
- `500` - Internal Server Error

---

## 🔄 Task Status Values

- `pending` - Task is pending
- `in_progress` - Task is in progress
- `completed` - Task is completed
- `cancelled` - Task is cancelled
- `on_hold` - Task is on hold

---

## 👤 User Roles

- `admin` - Full system access
- `project_manager` - Can manage projects and teams
- `team_lead` - Can manage team members
- `member` - Regular team member
- `viewer` - Read-only access

---

## 🔍 Query Parameters

### Pagination
```
?page=1&limit=10&sort=createdAt&order=desc
```

### Filtering
```
?status=pending&priority=high&assignedTo=user_id
```

### Search
```
?search=keyword&fields=title,description
```