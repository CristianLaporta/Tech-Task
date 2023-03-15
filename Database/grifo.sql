-- phpMyAdmin SQL Dump
-- version 5.0.4deb2~bpo10+1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Creato il: Mar 15, 2023 alle 10:21
-- Versione del server: 10.3.34-MariaDB-0+deb10u1
-- Versione PHP: 7.3.31-1~deb10u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `grifo`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `chatbot`
--

CREATE TABLE `chatbot` (
  `id` int(11) NOT NULL,
  `quest` text NOT NULL,
  `resp` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `chatbot`
--

INSERT INTO `chatbot` (`id`, `quest`, `resp`) VALUES
(1, 'come vi chiamate?', 'Noi siamo Grifo Multimedia!'),
(2, 'chi siete?', ' siamo Grifo Multimedia!'),
(3, 'come vi chiamate', 'Noi siamo Grifo Multimedia!'),
(4, 'chi siete', ' siamo Grifo Multimedia!'),
(5, 'dove vi trovate? ', 'BARI *, Via Bruno Zaccaro, 17/19 – 70126'),
(6, 'dove state?', 'BARI *, Via Bruno Zaccaro, 17/19 – 70126'),
(7, 'dove siete?', 'BARI *, Via Bruno Zaccaro, 17/19 – 70126'),
(8, 'dove vi trovate', 'BARI *, Via Bruno Zaccaro, 17/19 – 70126'),
(9, 'dove state', 'BARI *, Via Bruno Zaccaro, 17/19 – 70126'),
(10, 'dove siete', 'BARI *, Via Bruno Zaccaro, 17/19 – 70126');

-- --------------------------------------------------------

--
-- Struttura della tabella `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `message` text NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `message`, `email`) VALUES
(3, 'Laporta Cristian', '123', 'cricom@live.it'),
(4, 'Mario Rossi', 'sto testando i messaggi', 'test@live.it');

-- --------------------------------------------------------

--
-- Struttura della tabella `partner`
--

CREATE TABLE `partner` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `partner`
--

INSERT INTO `partner` (`id`, `img`, `name`) VALUES
(1, 'https://www.grifomultimedia.it/wp-content/uploads/2019/10/assimoco.jpg', ''),
(2, 'https://www.grifomultimedia.it/wp-content/uploads/2022/05/lavazzalogo.jpg', ''),
(3, 'https://www.grifomultimedia.it/wp-content/uploads/2022/04/logo_springer_healthcare.jpg', ''),
(4, 'https://www.grifomultimedia.it/wp-content/uploads/2022/04/proxima-informatica.png', ''),
(5, 'https://www.grifomultimedia.it/wp-content/uploads/2022/04/mc3innovation.png', ''),
(6, 'ttps://www.grifomultimedia.it/wp-content/uploads/2022/04/LogoAtos.png', ''),
(7, 'https://www.grifomultimedia.it/wp-content/uploads/2022/11/lutech.jpg', ''),
(8, 'https://www.grifomultimedia.it/wp-content/uploads/2022/04/logo-mps.png', ''),
(9, 'https://www.grifomultimedia.it/wp-content/uploads/2022/04/logo-psiche-onlus.png', ''),
(10, 'https://www.grifomultimedia.it/wp-content/uploads/2022/04/logo-lamberti-spa.png', ''),
(11, 'https://www.grifomultimedia.it/wp-content/uploads/2022/04/artfin-1.png', '');

-- --------------------------------------------------------

--
-- Struttura della tabella `portfolio`
--

CREATE TABLE `portfolio` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `subtitle` text NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `portfolio`
--

INSERT INTO `portfolio` (`id`, `title`, `subtitle`, `img`) VALUES
(1, 'titolo', 'sottotitolo', 'https://grifomultimedia.it/wp-content/uploads/2022/11/chesindacosei.jpg'),
(2, 'titolo', 'sottotitolo', 'https://grifomultimedia.it/wp-content/uploads/2022/09/gamification-featured-image.jpg'),
(3, 'titolo', 'titolo', 'https://grifomultimedia.it/wp-content/uploads/2022/01/marelli-portfolio-1.jpg'),
(4, 'titolo', 'sottotitolo', 'https://grifomultimedia.it/wp-content/uploads/2022/01/img-5.jpg'),
(5, 'titolo', 'sottotitolo', 'https://grifomultimedia.it/wp-content/uploads/2021/06/img-bg-portfolio-2.jpg'),
(6, 'titolo', 'sottotitolo', 'https://grifomultimedia.it/wp-content/uploads/2021/04/img-evidenza.jpg');

-- --------------------------------------------------------

--
-- Struttura della tabella `slide`
--

CREATE TABLE `slide` (
  `id` int(11) NOT NULL,
  `text` text NOT NULL,
  `linkbtn` text NOT NULL,
  `textbtn` text NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `slide`
--

INSERT INTO `slide` (`id`, `text`, `linkbtn`, `textbtn`, `img`) VALUES
(1, 'Prevenire i rischi legati alla *red sicurezza delle informazioni */red', 'test', 'SCOPRI', 'https://www.grifomultimedia.it/wp-content/uploads/2022/04/slide-2-sicurezza-informazioni.jpg'),
(2, 'previeni i  *red rischi */red ciao 123', 'test2', 'SCOPRI', 'https://www.grifomultimedia.it/wp-content/uploads/2019/10/bg3.jpg'),
(3, 'Sensibilizzare i più giovani ai temi della cybersecurity con un  *altrariga\r\n*red serious game */red', 'test2', 'SCOPRI DI PIù', 'https://www.grifomultimedia.it/wp-content/uploads/2022/04/slide-5-nabbovaldo.jpg');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `chatbot`
--
ALTER TABLE `chatbot`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `partner`
--
ALTER TABLE `partner`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `slide`
--
ALTER TABLE `slide`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `chatbot`
--
ALTER TABLE `chatbot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT per la tabella `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT per la tabella `partner`
--
ALTER TABLE `partner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT per la tabella `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT per la tabella `slide`
--
ALTER TABLE `slide`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
