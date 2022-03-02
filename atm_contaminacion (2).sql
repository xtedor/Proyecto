-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-09-2021 a las 17:17:40
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `atm_contaminacion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comunas`
--

CREATE TABLE `comunas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre_comuna` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `comunas`
--

INSERT INTO `comunas` (`id`, `nombre_comuna`, `created_at`, `updated_at`) VALUES
(1, 'Comuna 1', '2021-05-22 22:52:19', '2021-05-22 22:52:19'),
(2, 'Comuna 2', '2021-05-22 22:52:19', '2021-05-22 22:52:19'),
(3, 'Comuna 3', '2021-05-22 22:52:19', '2021-05-22 22:52:19'),
(4, 'Comuna 4', '2021-05-22 22:52:19', '2021-05-22 22:52:19'),
(5, 'Comuna 5', '2021-05-22 22:52:19', '2021-05-22 22:52:19'),
(6, 'Comuna 6', '2021-05-22 22:52:19', '2021-05-22 22:52:19'),
(7, 'Comuna 7', '2021-05-22 22:52:19', '2021-05-22 22:52:19'),
(8, 'Comuna 8', '2021-05-22 22:52:19', '2021-05-22 22:52:19'),
(9, 'Comuna 9', '2021-05-22 22:52:19', '2021-05-22 22:52:19'),
(10, 'Comuna 10', '2021-05-22 22:52:19', '2021-05-22 22:52:19'),
(11, 'Comuna 11', '2021-05-22 22:52:19', '2021-05-22 22:52:19'),
(12, 'Comuna 12', '2021-05-22 22:52:19', '2021-05-22 22:52:19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos_historicos`
--

CREATE TABLE `datos_historicos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `FECHA` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `PM10` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `TEMP` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `HUMEDAD` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DIR VIENTO` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Monto V` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Velocidad V` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Tem/Hum` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Tem/Hum/Vient` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `PRESION ATM` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `LLUVIA` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Intens lluv` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `RADIACION SOL` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Radiac acum` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Max Rad` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `UV Intens` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Max UV` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DENSIDAD AIRE` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `datos_historicos`
--

INSERT INTO `datos_historicos` (`id`, `FECHA`, `PM10`, `TEMP`, `HUMEDAD`, `DIR VIENTO`, `Monto V`, `Velocidad V`, `Tem/Hum`, `Tem/Hum/Vient`, `PRESION ATM`, `LLUVIA`, `Intens lluv`, `RADIACION SOL`, `Radiac acum`, `Max Rad`, `UV Intens`, `Max UV`, `DENSIDAD AIRE`) VALUES
(1, 'ENE', '27.71', '14.35', '86.3', '12.9', '1.51', '4.43', '14.39', '13.77', '560.36', '0.1', '0.12', '217.42', '3.12', '251.9', '2.63', '3.01', '0.8771'),
(2, 'FEB', '27.71', '14.35', '86.3', '12.9', '1.51', '4.43', '14.39', '13.77', '560.36', '0.1', '0.12', '217.42', '3.12', '251.9', '2.63', '3.01', '0.8771'),
(3, 'MAR', '20.42', '13.9', '82.75', '10.2', '2.07', '3.76', '13.83', '13.46', '563.85', '0.01', '0.12', '183.08', '2.62', '217.23', '2.04', '2.36', '0.8832'),
(4, 'ABR', '12.71', '13.55', '90.41', '11.2', '1.25', '4.08', '13.61', '13.04', '562.87', '0.05', '0.58', '116.13', '1.66', '134.96', '1.35', '1.5', '0.88'),
(5, 'MAY', '15.42', '15.77', '70.21', '7.8', '0.17', '4.24', '15.43', '14.85', '562.32', '0', '0', '236.69', '0.34', '237.15', '2.57', '2.58', '0.8737'),
(6, 'JUN', '18.75', '16.49', '74.26', '9', '0.12', '3.16', '16.35', '16.11', '562.42', '0', '0', '185.08', '0.27', '185.5', '1.85', '1.86', '0.8706'),
(7, 'JUL', '9.58', '14.53', '73.45', '7.1', '0.11', '2.97', '14.25', '14.01', '563.2', '0', '0', '163.5', '0.23', '163.96', '1.39', '1.39', '0.8838'),
(8, 'AGO', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(9, 'SEP', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(10, 'OCT', '15.89', '13.2', '81.25', '6.54', '0.65', '3.76', '13.08', '12.54', '559.11', '0.01', '0.13', '143.78', '1.03', '163.77', '1.94', '2.19', '0.88'),
(11, 'NOV', '21.73', '13.13', '87.45', '7.72', '0.58', '3.41', '13.17', '12.64', '559.68', '0.01', '0.12', '192.68', '1.38', '207', '2.43', '2.59', '0.88'),
(12, 'DIC', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(13, 'ENE', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(14, 'FEB', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(15, 'MAR', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(16, 'ABR', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(17, 'MAY', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(18, 'JUN', '22.08', '13.62', '75.85', '7.5', '1.6', '4.6', '13.37', '12.6', '562.73', '0.01', '0.14', '159.49', '2.29', '194.51', '1.83', '2.16', '0.88'),
(19, 'JUL', '22.2', '13.84', '72.15', '4.56', '3.28', '8.66', '13.5', '11.13', '562.31', '0', '0', '187.53', '2.69', '233.62', '1.98', '2.43', '0.88'),
(20, 'AGO', '12.81', '13.75', '58.45', '3.23', '2.76', '7.02', '13.38', '11.34', '562.68', '0', '0.01', '147.97', '2.12', '178.07', '1.71', '2.06', '0.88'),
(21, 'SEP', '23.64', '13.69', '70.18', '3.49', '3.41', '8.97', '13.62', '11.11', '562.87', '0', '0', '195.06', '2.8', '246.37', '2.38', '3', '0.88'),
(22, 'OCT', '33.5', '13.56', '83.1', '5.98', '1.21', '3.54', '13.48', '12.87', '561.93', '0.02', '0.24', '163.92', '2.35', '194.75', '1.99', '2.3', '0.88'),
(23, 'NOV', '25.58', '14.46', '80.34', '7.76', '1.04', '3.47', '14.37', '13.95', '561.07', '0.01', '0.22', '162.05', '2.15', '191.87', '2.06', '2.42', '0.91'),
(24, 'DIC', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(25, 'ENE', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(26, 'FEB', '27.3', '13.81', '86.14', '2.72', '0.8', '3.44', '13.8', '13.34', '555.93', '0.01', '0.08', '135.2', '1.17', '152.22', '1.8', '2.04', '0.87'),
(27, 'MAR', '32.66', '14.58', '80.98', '3.28', '1.44', '4.37', '14.48', '13.87', '555.93', '0.01', '0.09', '127.57', '1.83', '154.51', '1.62', '1.95', '0.87'),
(28, 'ABR', '28.98', '14.6', '76.79', '4.49', '1.5', '4.45', '14.39', '13.79', '556.25', '0.01', '0.09', '140.08', '2.01', '164.07', '1.7', '1.98', '0.87'),
(29, 'MAY', '19.17', '14.62', '83.24', '4.2', '1.68', '4.72', '14.58', '13.87', '556.16', '0.01', '0.04', '178.63', '2.56', '223.26', '2.14', '2.63', '0.8647'),
(30, 'JUN', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(31, 'JUL', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(32, 'AGO', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(33, 'SEP', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(34, 'OCT', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(35, 'NOV', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(36, 'DIC', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(37, 'ENE', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(38, 'FEB', '24.01', '17.31', '70.45', '6.2', '0.13', '2.91', '17.15', '16.83', '561.32', '0', '0.01', '175.49', '0.25', '175.84', '2.15', '2.15', '0.87'),
(39, 'MAR', '18.44', '16.51', '76.34', '7.46', '0.11', '2.56', '16.43', '16.09', '562.35', '0', '0.03', '161.55', '0.23', '161.89', '2.11', '2.11', '0.88'),
(40, 'ABR', '15.21', '17.46', '66.93', '7.87', '0.16', '3.86', '17.16', '16.65', '562.44', '0', '0.01', '148.04', '0.21', '148.39', '1.89', '1.9', '0.88'),
(41, 'MAY', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(42, 'JUN', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(43, 'JUL', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(44, 'AGO', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(45, 'SEP', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(46, 'OCT', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(47, 'NOV', '15.85', '15.75', '81.31', '6.73', '0.09', '3.51', '16.95', '16.72', '553.58', '0', '0.05', '165.1', '14.59', '150.11', '1.71', '1.32', '0.86'),
(48, 'DIC', '21.6', '16.47', '74.93', '8.05', '0.99', '3.43', '16.35', '16.07', '551.14', '0.02', '0.18', '170.64', '2.45', '208.99', '2.05', '2.43', '0.87'),
(49, 'ENE', '16.7', '16.44', '64.05', '8.3', '1.68', '5.75', '15.95', '15.51', '551.42', '0', '0.03', '131.07', '1.88', '169.7', '1.76', '2.26', '0.88'),
(50, 'FEB', '17.8', '16.87', '70.43', '6.81', '0.94', '3.47', '16.63', '16.46', '551.39', '0.01', '0.06', '159.97', '2.29', '203.07', '2.06', '2.56', '0.87'),
(51, 'MAR', '21.87', '16.99', '73.73', '8.01', '0.94', '3.3', '16.89', '16.68', '551.28', '0.01', '0.13', '161.31', '2.31', '196.55', '2.09', '2.5', '0.87'),
(52, 'ABR', '17.8', '17.49', '67.37', '7.31', '0.89', '3.73', '17.22', '17.16', '551.05', '0', '0', '140.82', '2.02', '181.28', '1.85', '2.36', '0.87'),
(53, 'MAY', '18.37', '17.47', '65.66', '7.69', '1.29', '4.63', '17.14', '16.92', '551.91', '0', '0.03', '147.97', '2.12', '185.75', '1.77', '2.19', '0.87'),
(54, 'JUN', '15.72', '16.87', '67.48', '8.27', '1.71', '5.68', '16.56', '16.01', '552.12', '0.01', '0.02', '135.08', '1.94', '174.02', '1.55', '1.97', '0.88'),
(55, 'JUL', '16.01', '17.02', '64.89', '8.24', '1.74', '5.85', '16.61', '16.05', '552.07', '0.01', '0.05', '149.04', '2.14', '182.7', '1.75', '2.15', '0.88'),
(56, 'AGO', '18.06', '16.96', '63.96', '8.39', '1.8', '5.83', '16.52', '15.97', '552.05', '0', '0.01', '129.03', '1.85', '163.69', '1.47', '1.93', '0.88'),
(57, 'SEP', '22.2', '17.72', '56.82', '8.6', '1.93', '6.3', '17.03', '16.46', '551.51', '0', '0', '168.26', '2.41', '214.64', '1.71', '2.22', '0.87'),
(58, 'OCT', '21.6', '17.75', '61.41', '7.68', '1.4', '4.77', '17.24', '16.97', '552.15', '0', '0', '164', '2.35', '210.08', '1.8', '2.27', '0.87'),
(59, 'NOV', '16.8', '17.41', '68.77', '6.8', '1.33', '4.44', '17.21', '16.87', '549.87', '0.02', '0.18', '109.95', '1.58', '135.83', '1.31', '1.61', '0.87'),
(60, 'DIC', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(61, 'ENE', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(62, 'FEB', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(63, 'MAR', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(64, 'ABR', '16.7', '17.47', '67.25', '8.1', '1.31', '4.16', '17.23', '17.08', '551.13', '0', '0', '138.61', '1.99', '158.92', '1.73', '1.95', '0.8706'),
(65, 'MAY', '11.86', '18.17', '67.09', '7.24', '1.22', '4.23', '17.98', '17.79', '552.02', '0', '0.03', '143.32', '2.05', '183.76', '1.74', '2.19', '0.87'),
(66, 'JUN', '15.64', '17.24', '66.97', '7.37', '1.3', '4.5', '16.94', '16.66', '552.45', '0', '0.01', '145.2', '2.08', '178.4', '1.63', '1.98', '0.88'),
(67, 'JUL', '13.6', '16.91', '65.82', '7.07', '1.58', '5.37', '16.54', '15.97', '553.07', '0', '0', '138.57', '1.99', '183.59', '1.47', '1.86', '0.88'),
(68, 'AGO', '16.78', '16.76', '62.94', '7.94', '1.61', '5.44', '16.26', '15.77', '552.38', '0.01', '0.06', '155.85', '2.23', '192.88', '1.71', '2.13', '0.88'),
(69, 'SEP', '21.74', '17.2', '60.68', '7.87', '1.51', '5.12', '16.63', '16.27', '552.39', '0', '0.02', '187.51', '2.69', '230.48', '2.1', '2.55', '0.87'),
(70, 'OCT', '18.93', '16.97', '69.95', '7.55', '0.95', '3.43', '16.72', '16.61', '550.95', '0.01', '0.04', '132.21', '1.9', '166.58', '1.52', '1.87', '0.87'),
(71, 'NOV', '20.76', '17.02', '75.03', '6.73', '1.04', '3.42', '16.96', '16.64', '550.9', '0.01', '0.07', '173.52', '2.49', '213.24', '2.1', '2.46', '0.86'),
(72, 'DIC', '20.27', '16.66', '75.31', '8.09', '0.73', '2.75', '16.57', '16.48', '550.99', '0.01', '0.04', '161.55', '2.32', '197.13', '1.8', '2.16', '0.86');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(22, '2014_10_12_000000_create_users_table', 1),
(23, '2014_10_12_100000_create_password_resets_table', 1),
(24, '2019_08_19_000000_create_failed_jobs_table', 1),
(25, '2021_05_13_224204_create_usuarios_table', 1),
(26, '2021_05_21_232104_create_variables_table', 1),
(27, '2021_05_22_215835_create_comunas_table', 1),
(28, '2021_09_13_135608_create_datos_historicos_table', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Cedula` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Apellido` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `Cedula`, `Nombre`, `Apellido`, `Email`, `Password`, `created_at`, `updated_at`) VALUES
(1, '1085330718', 'Harvey', 'Riascos', 'harveympv@hotmail.com', '3d83f27f0845faf9fa80e1a8f0f7ea75', '2021-05-23 03:07:54', '2021-05-23 03:07:54'),
(3, '1085330718', 'da', 'Riascos', 'harvey@hotmail.com', '4f3a324cdb71eb2b006b11a3150a2961', '2021-08-25 21:33:25', '2021-08-25 21:33:25'),
(6, '1085330718', 'Harvey', 'Riascos', 'kira@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', '2021-08-25 21:43:57', '2021-08-25 21:43:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `variables`
--

CREATE TABLE `variables` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_comuna` int(11) NOT NULL,
  `variable_1` decimal(10,4) NOT NULL,
  `variable_2` decimal(10,4) NOT NULL,
  `variable_3` decimal(10,4) NOT NULL,
  `variable_4` decimal(10,4) NOT NULL,
  `variable_5` decimal(10,4) NOT NULL,
  `variable_6` decimal(10,4) NOT NULL,
  `variable_7` decimal(10,4) NOT NULL,
  `variable_8` decimal(10,4) NOT NULL,
  `contaminacion` decimal(10,4) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `variables`
--

INSERT INTO `variables` (`id`, `id_comuna`, `variable_1`, `variable_2`, `variable_3`, `variable_4`, `variable_5`, `variable_6`, `variable_7`, `variable_8`, `contaminacion`, `created_at`, `updated_at`) VALUES
(13, 1, '1.0000', '1.0000', '1.0000', '1.0000', '1.0000', '1.0000', '1.0000', '1.0000', '8.0000', '2021-05-23 05:37:55', '2021-05-23 05:37:55'),
(14, 2, '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '1.0000', '1.0000', '2021-05-23 05:40:44', '2021-05-23 05:40:44'),
(15, 3, '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '1.0000', '1.0000', '2021-05-23 05:40:44', '2021-05-23 05:40:44'),
(16, 4, '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '1.0000', '1.0000', '2021-05-23 05:40:44', '2021-05-23 05:40:44'),
(17, 5, '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '1.0000', '1.0000', '2021-05-23 05:40:44', '2021-05-23 05:40:44'),
(18, 6, '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '1.0000', '1.0000', '2021-05-23 05:40:44', '2021-05-23 05:40:44'),
(19, 7, '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '1.0000', '1.0000', '2021-05-23 05:40:44', '2021-05-23 05:40:44'),
(20, 8, '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '1.0000', '1.0000', '2021-05-23 05:40:44', '2021-05-23 05:40:44'),
(21, 9, '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '1.0000', '1.0000', '2021-05-23 05:40:44', '2021-05-23 05:40:44'),
(22, 10, '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '1.0000', '1.0000', '2021-05-23 05:40:44', '2021-05-23 05:40:44'),
(23, 11, '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '1.0000', '1.0000', '2021-05-23 05:40:44', '2021-05-23 05:40:44'),
(24, 12, '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '1.0000', '1.0000', '2021-05-23 05:40:44', '2021-05-23 05:40:44'),
(25, 1, '3.2355', '4.4895', '6.3274', '5.4870', '1.2421', '5.6329', '1.1366', '1.2665', '25.4724', '2021-06-02 00:36:49', '2021-06-02 00:36:49'),
(26, 3, '3.2355', '4.4895', '6.3274', '5.4870', '1.2421', '5.6329', '1.1366', '1.2665', '25.4724', '2021-08-02 21:28:54', '2021-08-02 21:28:54');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comunas`
--
ALTER TABLE `comunas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `datos_historicos`
--
ALTER TABLE `datos_historicos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `variables`
--
ALTER TABLE `variables`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comunas`
--
ALTER TABLE `comunas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `datos_historicos`
--
ALTER TABLE `datos_historicos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `variables`
--
ALTER TABLE `variables`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
