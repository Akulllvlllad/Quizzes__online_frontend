import React from "react"





	export const useTimer = ( initialTimer: number ) => {
	
		const [seconds, setSeconds] = React.useState(initialTimer)
		const [timerActive, setTimerActive] = React.useState(false)

		const resetTimer = () => {
			setSeconds(initialTimer)
		}
		
	React.useEffect(() => {
		if (seconds > 0 && timerActive) {
			setTimeout(setSeconds, 100, seconds - 1)
		} else {
			setTimerActive(false)
		}
	}, [seconds, timerActive])

	return {resetTimer, setTimerActive, timerActive, seconds }
}
