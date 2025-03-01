-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2025 at 06:55 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `car_rental`
--

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(50) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `name`, `type`, `price`, `image`, `created_at`) VALUES
(3, 'Toyota Corolla', 'COMPACT CAR', 100.00, 'https://www.shutterstock.com/image-vector/icon-logo-sign-art-sedan-260nw-2484157269.jpg', '2025-02-20 13:55:53'),
(4, 'BMW X5', 'LUXURY', 120.00, 'https://imgd.aeplcdn.com/370x208/n/cw/ec/152681/x5-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80', '2025-02-20 13:55:53'),
(5, 'Ford Transit', 'VAN', 80.00, 'https://t3.ftcdn.net/jpg/05/03/08/20/360_F_503082059_jE6UWwHdJ0JvlYuvH8Zt0LoNX6Mb1DBB.jpg', '2025-02-20 13:55:53'),
(6, 'Jeep Wrangler', 'SUV', 100.00, 'https://imgd.aeplcdn.com/370x208/n/cw/ec/174975/wrangler-facelift-exterior-right-front-three-quarter.jpeg?isig=0&q=80', '2025-02-20 13:55:53'),
(8, 'MINI COPER', 'MINI', 50.00, 'https://th.bing.com/th/id/OIP.cdcoJ7Q7tvPEthHHPG7ctwHaE8?w=1468&h=980&rs=1&pid=ImgDetMain', '2025-02-20 14:25:20'),
(14, 'Motorcycle', 'ATV', 63.00, 'https://th.bing.com/th/id/OIF.tCCLy4tPwfUSRfWQ5T8vbQ?rs=1&pid=ImgDetMain', '2025-02-28 12:34:55');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('user','admin') DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`) VALUES
(2, 'test', 'test', 'user'),
(3, 'carol', '$2b$10$k8xSuZAX8gW/a94HQtuLt.ZNxU4QnHyJ9BOW9i6AnuzejDiTkeHO6', 'user'),
(4, 'car', '$2b$10$I3SG.fx.I.DYLYFD7ahG9u/fCH2Tsl9nBL2hwni44hQA1xmxk3Pqa', 'user'),
(6, 'admin', 'adminpassword', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
