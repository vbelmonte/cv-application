export function Button({ text, classes, img, imgClasses, type, handleClick }) {
	if (type === 'icon-text') {
		return (
			<button className={classes + ' icon-text'} type='button' onClick={handleClick}>
					<img src={img} className={imgClasses + ' icon-16'} />
					{text}
			</button>
		)
	} else if (type === 'icon') {
		return (
			<button className={classes + ' icon'} type='button' onClick={handleClick}>
					<img src={img} className='icon-20' />
			</button>
		)
	} else if (type === 'outline') {
		return (
			<button className={classes + ' outline'} type='button' onClick={handleClick}>
					{text}
			</button>
		)
	} else {
		return (
			<button className={classes} type='button' onClick={handleClick}>
					{text}
			</button>
		)
	}
}