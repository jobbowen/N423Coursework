-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 09, 2019 at 10:35 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `n423`
--

-- --------------------------------------------------------

--
-- Table structure for table `people`
--

CREATE TABLE `people` (
  `id` int(11) NOT NULL,
  `Image` varchar(256) NOT NULL,
  `Name` varchar(256) NOT NULL,
  `Description` varchar(2048) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `people`
--

INSERT INTO `people` (`id`, `Image`, `Name`, `Description`) VALUES
(1, 'https://www.reachormiss.com/wp-content/uploads/2119/07/Kate-Sheehan.jpg', 'Kate Green', 'Kate Green is known for her work at Green Peace as well as on Mars. She is an industry leader in her field and has won numerous awards for her achievements in her field. Tune in to find out what she has to say.'),
(2, 'https://bloximages.newyork1.vip.townnews.com/djournal.com/content/tncms/assets/v3/editorial/c/80/c8079262-ff36-52f4-8d9b-407e34328135/5cdc8b6c36f88.image.jpg?resize=400%2C400', 'Jim Caldwell', 'Jim Caldwell is a world renowned collector of rare antique jewels as well as rare artifacts. He has scavenged from the tundra of the Arctic Circle to the deserts of Africa. He is renowned among his peers as the best at what he does. Check him out at his panel.'),
(3, 'https://pbs.twimg.com/profile_images/1168460146298609664/CxOE1PdK_400x400.jpg', 'Claire Jones', 'Claire Jones has completed countless projects in bettering the world. Cleaning up the oceans, the forests and her local city are just a sliver of what she has accomplished in her goal to clean up the world. She has organized thousands of people to travel offshore and clean up floating trash. Come check her out at her panel.'),
(4, 'https://wamu.org/wp-content/uploads/2016/10/mikala-wamu-51.jpg', 'Michelle Donovan', 'Michelle Donovan has been at the forefront of processor development in the technology world. Although she calls the U.S. home, she travels to Taiwan almost weekly to oversee progress on new processor nodes. Explore what she has to say at her panel.'),
(5, 'https://martechseries.com/wp-content/uploads/2019/08/Zviki-Ben-Ishay-400-x-400.jpg', 'Steven Washiski', 'Steve Washiski is an explorer and mountaineer hailing from Colorado. He grew up climbing mountains and has continued that passion throughout the world, conquering each mountain in his path one by one. Listen to his amazing stories of his travels at his panel.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `people`
--
ALTER TABLE `people`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `people`
--
ALTER TABLE `people`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
