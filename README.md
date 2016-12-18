Database expense

CREATE TABLE `expense` (
  `expenseId` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(100) NOT NULL,
  `amount` float NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`expenseId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 
