<<<<<<< HEAD
import autobind from 'autobind-decorator';
import Module from '@/module';
import serifs from '@/serifs';
import config from '@/config';
import { genItem } from '@/vocabulary';
=======
import { bindThis } from '@/decorators.js';
import Module from '@/module.js';
import serifs from '@/serifs.js';
import { genItem } from '@/vocabulary.js';
import config from '@/config.js';
>>>>>>> 54f10b33216ad516507c4d6eac45f435866a06ad

export default class extends Module {
	public readonly name = 'noting';

	@bindThis
	public install() {
		if (config.notingEnabled === false) return {};

		setInterval(() => {
			if (Math.random() < 0.1) {
				this.post();
			}
		}, 1000 * 60 * 10);

		return {};
	}

	@bindThis
	private post() {
        const season = this.getSeason();
		    const notes = [
					...serifs.noting.notes,
					() => {
						const item = genItem();
						return serifs.noting.want(item);
					},
					() => {
						const item = genItem();
						return serifs.noting.see(item);
					},
					() => {
						const item = genItem();
						return serifs.noting.expire(item);
					},
				];
        const seasonNotes = serifs.seasons[season];

        const allNotes = [...notes, ...seasonNotes];

		const note = allNotes[Math.floor(Math.random() * allNotes.length)];

		// TODO: 季節に応じたセリフ

		this.ai.post({
			text: typeof note === 'function' ? note() : note
		});
	}

    private getSeason(): string {
        const month = new Date().getMonth() + 1;
        if (month < 3 || month === 12) {
            return `winter`;
        } else if (month < 6) {
            return `spring`;
        } else if (month < 9) {
            return `summer`;
        } else {    
            return `autumn`;
        }
    }
}
