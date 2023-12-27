//calculating dates
				// const currentDate = obj.movementsDates[index] ? new Date(obj.movementsDates[index]) : new Date();
				// not optimal cz while we might add date to the dom, we are not storing it in array so we loose data
				// instead do a push to movementsDates array in the transfer
		const currentDate = new Date(obj.movementsDates[index]); //date
		const currentDateDay = `${currentDate.getDate()}`;
		const currentDateMonth = `${currentDate.getMonth() +1}`.padStart(2, 0) ;
		const currentDateYear = `${currentDate.getFullYear()}`.padStart(2, 0);
		const currentHour = `${currentDate.getHours()}`.padStart(2, 0);
		const currentMins = `${currentDate.getMinutes()}`.padStart(2, 0);

		let dateOfTransaction = `${currentDateDay}/${currentDateMonth}/${currentDateYear}, ${currentHour}:${currentMins}`; //displayDate
		dateOfTransaction= new Intl.DateTimeFormat(currentDate, obj.locale).format(currentDate);
		
		const calcDays = (date1, date2) => Math.round(Math.abs((date2 - date1)) / (1000*60*60*24));
		const daysPassed = calcDays(new Date(), currentDate);
		
		let displayThisDate = daysPassed === 0 ? "Today" : daysPassed === 1 ? "Yesterday" : daysPassed <= 7 ? `${daysPassed} days ago` : dateOfTransaction;
		
