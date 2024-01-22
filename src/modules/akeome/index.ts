import { bindThis } from '@/decorators.js';
import Module from '@/module.js';
import serifs from '@/serifs.js';

export default class extends Module {
	public readonly name = 'akeome';

	@bindThis
	public install() {
		this.crawleNewYear();
		setInterval(this.crawleNewYear, 1000 * 60 * 1);

		return {};
	}

	/**Happy New Year!**/

	@bindThis
	private crawleNewYear() {
		const now = new Date();

		const isNewYear = now.getMonth() == 0 && now.getDate() == 1 && now.getHours() == 0 && now.getMinutes() == 0;

		const akeome = serifs.akeome.HappyNewYear;

		if (isNewYear) {
			this.ai.post({
				text: akeome
			});
		};
		};
	}; // This is the missing closing brace
