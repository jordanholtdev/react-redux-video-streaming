# Streaming App

This app is a small streaming app built while completing a React course. It has a client and a server. The client allows authenticated users to create, edit and delete video streams.

### Technologies

axios: 0.21.0
bootstrap: 4.5.3
react: 17.0.1
react-bootstrap: 1.4.0
react-dom: 17.0.1
react-redux: 7.2.2
react-router-dom": 5.2.0
redux: 4.0.5
redux-form: 8.3.6
redux-thunk: 2.3.0

### How to use

Clone or download the repository.

There is a client and a server. The client is a React app and the server is a simple json server for test data.

**Configure the client**:

Navigate to the client directory

```bash
cd client
```

To enable auth, create a `.env` file in the root of the project and include your Google Auth key:

```env
REACT_APP_GOOGLE_USER_ID=<your google key>
```

Install the dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm start
```

**Configure the server**:

You can configure the db schema to your needs.

Navigate to the server directory

```bash
cd server
```

Install the server dependency

```bash
npm install
```

Start the server:

```bash
npm start
```
