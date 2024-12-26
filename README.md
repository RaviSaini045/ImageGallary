# Photo Gallery Application with Pixabay Integration

This project is a photo gallery application that allows users to upload, view, and delete images. Additionally, users can search for images using the Pixabay API, displaying results in a grid layout. The application is built using React and styled with Ant Design (antd) components.

## Features

### Functional Features
1. **Image Upload**  
   - Users can upload images from their local devices.
   - Uploaded images are displayed in a responsive grid layout.

2. **Image Search**  
   - Integration with the [Pixabay API](https://pixabay.com/api/docs/) allows users to search for images based on keywords.
   - Search results are displayed in a grid layout using Ant Design components.

3. **Image Deletion**  
   - Users can delete images from the gallery.

4. **Responsive Design**  
   - The application is fully responsive, optimized for both desktop and mobile devices.

5. **Preview Images**  
   - Clicking on an image opens a modal to display a larger version of the image.

### Non-Functional Features
- Clean and maintainable codebase following best practices.
- Version control using Git with a clear commit history.
- Online deployment for easy access.

---

## Tech Stack

### Frontend
- **React**: Built using `create-react-app` for fast boilerplate setup.
- **Ant Design (antd)**: UI components for a clean and user-friendly interface.
- **Axios**: For handling API requests to Pixabay.

### API
- **Pixabay API**: Integrated for fetching images based on user search queries.

### State Management
- **React Hooks**: Utilizing `useState` and `useEffect` for managing state and lifecycle.

---

## Setup Instructions

Follow the steps below to set up and run the project locally:

### Prerequisites
- Node.js and npm installed on your machine.

### Frontend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/RaviSaini045/ImageGallery.git
2. Navigate to the project folder and install dependencies:
   ```bash
   npm install
3. Start the frontend development server
   ```bash
   npm run dev
### Backend Setup
   ```bash
   cd server
   npm install
   npm run dev
