# Backend

This is the backend of the **marketplace** project.

## 🚀 Technologies

- **Node.js**
- **TypeScript**
- **TypeORM**
- **SQLite**

## 📦 Installation and Execution

Follow the steps below to set up and run the project in your local
environment.

### 1️⃣ Clone the repository

```sh
git clone https://github.com/brenooliveiranascimento/DT-money-backend.git
cd dtmoney-backend
```

### 2️⃣ Install dependencies

Use the package manager **yarn** or **npm** to install all project
dependencies:

```sh
yarn
or
npm i
```

### 3️⃣ Run the migrations

Run the command below to create the tables in the database:

```sh
yarn migration:run
or
npm run migration:run
```

### 4️⃣ Start the server

Now, just start the server with:

```sh
yarn dev
or
npm run dev
```

The backend will be running at `http://localhost:3001`.\
To access the documentation: `http://localhost:3001/docs`
