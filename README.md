# Admin Dashboard Website

## Overview

The Admin Dashboard Website provides a comprehensive interface for managing and monitoring your systems. It offers real-time analytics, user management, and customizable settings, allowing administrators to efficiently oversee operations and make informed decisions. The interface is designed with a sleek, intuitive layout to ensure ease of use and is equipped with robust security features.

```sh
Login with:
Email: test@gmail.com
Password: 123456
 ```

![Screenshot (331)](https://github.com/Keshab1113/Admin-DashBoard/assets/110785343/c3b9583e-5785-49ea-8234-02b5b211b3e0)
![Screenshot (330)](https://github.com/Keshab1113/Admin-DashBoard/assets/110785343/8dc708da-5a26-4660-bdb9-b8de416eb7b3)
![Screenshot (329)](https://github.com/Keshab1113/Admin-DashBoard/assets/110785343/e6c38f8e-4f78-4443-bff9-cbfd45d3bc95)
![Screenshot (328)](https://github.com/Keshab1113/Admin-DashBoard/assets/110785343/2ca21eaa-9475-4f95-985b-55e35b5a95a3)
![Screenshot (327)](https://github.com/Keshab1113/Admin-DashBoard/assets/110785343/5b6e77ad-f52f-471a-a191-baa1e01213b2)
![Screenshot (326)](https://github.com/Keshab1113/Admin-DashBoard/assets/110785343/1715f5cb-2fc5-4e43-8767-80745f6a5ff0)
![Screenshot (325)](https://github.com/Keshab1113/Admin-DashBoard/assets/110785343/cfa84776-2af8-43c2-9500-762a6c6de396)
![Screenshot (324)](https://github.com/Keshab1113/Admin-DashBoard/assets/110785343/b9be82e4-371d-4460-9771-30de17915cf4)
![Screenshot (323)](https://github.com/Keshab1113/Admin-DashBoard/assets/110785343/8cc66928-ad28-4f35-bc24-0bfb9dc0ac66)
![Screenshot (322)](https://github.com/Keshab1113/Admin-DashBoard/assets/110785343/9d53224f-64ea-480e-8ff7-3d5aa8c49280)
![Screenshot (321)](https://github.com/Keshab1113/Admin-DashBoard/assets/110785343/1da535ff-ce27-4b2a-b2d0-a26e1687d167)
![Screenshot (320)](https://github.com/Keshab1113/Admin-DashBoard/assets/110785343/bb7af197-5cc0-4c0b-8e99-a77dd7be88b5)
![Screenshot (319)](https://github.com/Keshab1113/Admin-DashBoard/assets/110785343/42208d8b-cee4-4b17-a042-49a63667a3aa)
![Screenshot (318)](https://github.com/Keshab1113/Admin-DashBoard/assets/110785343/6217cfcb-8751-4a34-9f41-aa5d89fc35a4)
![Screenshot (317)](https://github.com/Keshab1113/Admin-DashBoard/assets/110785343/1371b316-3e84-4f21-ab7d-0a90a9e28172)

## Tech Stack

### Frontend
- **React (Vite)**
- **Axios**
- **CropperJS**
- **Flowbite**
- **Flowbite-React**
- **Recharts**
- **Tailwind CSS**
- **Material UI**
- **Redux Toolkit**
- **React-Multi-Carousel**
- **React-Loading-Skeleton**
- **React-Resizable**
- **React-Router-Dom**

### Backend
- **Zod**
- **Passport-Local**
- **Passport**
- **Mongoose**
- **jsonwebtoken**
- **Express-Session**
- **Express**
- **Dotenv**
- **CORS**
- **Cookie-Parser**
- **Connect-Mongo**
- **BcryptJS**

### Database
- **MongoDB**

## Features

### Dashboard
- View total systems, systems online, systems offline, and systems with unknown status.
- Monitor individual systems with real-time data including temperature, pressure, flow rate, humidity, and gas levels.
- Quickly identify system status with clear indicators (online, offline, unknown).

### Device Management
- Select and manage devices.
- View and edit basic device information.
- Input and manage device parameters.
- Set parameter ranges, alert limits, and plot colors.
- Add new parameters with ease.

## Setup Instructions

### Prerequisites
- Node.js
- MongoDB

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/admin-dashboard.git
    cd admin-dashboard
    ```

2. **Install frontend dependencies:**
    ```sh
    cd client
    npm install
    ```

3. **Install backend dependencies:**
    ```sh
    cd ../server
    npm install
    ```

4. **Set up environment variables:**
    - Create a `.env` file in the `backend` directory and add the following:
        ```
        MONGODB_URI=your_mongodb_uri
        MONGO_URL= mongodb://sudotester:b5f5BIj3lViR6xZ9@ac-ejlq9qy-shard-00-00.u774ulz.mongodb.net:27017,ac-ejlq9qy-shard-00-01.u774ulz.mongodb.net:27017,ac-ejlq9qy-shard-00-02.u774ulz.mongodb.net:27017/TESTDB?ssl=true&replicaSet=atlas-h187n4-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ClusterTestDb

PORT = 5000

JWT_SECRECT_KEY=KESHABADMIN

SECRET = KESHABADMIN

MONGO_SESS_COL= testKeshabAppSess
        ```

5. **Run the application:**
    - **Frontend:**
        ```sh
        cd client
        npm run dev
        ```
    - **Backend:**
        ```sh
        cd ../server
        npm start
        ```

## Usage

1. **Access the Dashboard:**
    - Open your browser and navigate to `http://localhost:5173`.

2. **Manage Devices:**
    - Use the device management interface to view and edit device details, input parameters, and set alerts.

3. **Monitor Systems:**
    - Check the dashboard for real-time updates on system status and performance metrics.

## Contributing

We welcome contributions from the community. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under Mr. Keshab Das. See the [LICENSE](LICENSE) file for details.
