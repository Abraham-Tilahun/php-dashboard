<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Dashboard</title>
    <link rel="stylesheet" href="style.css">
    <!-- FontAwesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>
    <!-- Header Section -->
    <header class="header">
        <div class="header-left">
            <img src="logo.png" alt="Logo" class="logo">
            <h4>Company Name</h4>
            <button class="toggle-btn" onclick="toggleSidebar()">☰</button>
        </div>
        <div class="header-middle">
            <p>Welcome, User!</p>
        </div>
        <div class="header-right">
            <div class="dropdown">
                <button class="dropdown-toggle"></button>
                <div class="dropdown-content">
                    <a href="#">Edit Profile</a>
                    <a href="#">Settings</a>
                    <a href="#">Logout</a></div>
            </div>
        </div>
    </header>
