-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 31, 2018 at 09:21 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bereadyattend`
--

-- --------------------------------------------------------

--
-- Table structure for table `att_class_attendance`
--

CREATE TABLE `att_class_attendance` (
  `id` int(11) NOT NULL,
  `student_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT '',
  `student_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT '',
  `check_in_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `att_class_attendance`
--

INSERT INTO `att_class_attendance` (`id`, `student_id`, `student_name`, `check_in_time`) VALUES
(8, 's3256292', 'Binh Le', '2018-07-26 11:23:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `att_class_attendance`
--
ALTER TABLE `att_class_attendance`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `att_class_attendance`
--
ALTER TABLE `att_class_attendance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
