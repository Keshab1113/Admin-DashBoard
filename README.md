# Admin Dashboard Website

## Overview

The Admin Dashboard Website provides a comprehensive interface for managing and monitoring your systems. It offers real-time analytics, user management, and customizable settings, allowing administrators to efficiently oversee operations and make informed decisions. The interface is designed with a sleek, intuitive layout to ensure ease of use and is equipped with robust security features.

```sh
Login(As a User) with:
Email: test@gmail.com
Password: 123456
 ```
```sh
Login(As a Admin) with:
Email: keshabdas2003@gmail.com
Password: Keshab@1234
 ```


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
    git clone https://github.com/Keshab1113/admin-dashboard.git
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
        ```sh
        MONGO_URL= mongodb+srv://keshabdas2003:keshabadmin@cluster0.fwwstpz.mongodb.net/
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
        cd server
        npm run dev
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
