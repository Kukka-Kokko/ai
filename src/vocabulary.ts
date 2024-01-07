import * as seedrandom from 'seedrandom';

export const itemPrefixes = [
	'プラチナ製',
	'新鮮な',
	'最新式の',
	'古代の',
	'手作り',
	'時計じかけの',
	'伝説の',
	'焼き',
	'生の',
	'藍謹製',
	'ポケットサイズ',
	'3日前の',
	'そこらへんの',
	'偽の',
	'使用済み',
	'壊れた',
	'市販の',
	'オーダーメイドの',
	'業務用の',
	'Microsoft製',
	'Apple製',
	'人類の技術を結集して作った',
	'2024年製', // TODO ランダム
	'500kgくらいある',
	'高級',
	'腐った',
	'人工知能搭載',
	'反重力',
	'折り畳み式',
	'携帯型',
	'遺伝子組み換え',
	'飛行能力を獲得した',
	'純金製',
	'透明な',
	'光る',
	'ハート型の',
	'動く',
	'半分にカットされた',
	'USBコネクタ付きの',
	'いにしえの',
	'呪われた',
	'エンチャントされた',
	'一日分のビタミンが入った',
	'かじりかけ',
	'幻の',
	'仮想的な',
	'原子力',
	'高度に訓練された',
	'遺伝子組み換えでない',
	'ダンジョン最深部で見つかった',
	'異世界の',
	'異星の',
	'謎の',
	'時空を歪める',
	'異音がする',
	'霧散する',
	'プラズマ化した',
	'衝撃を与えると低確率で爆発する',
	'ズッキーニに擬態した',
	'仮説上の',
	'毒の',
	'真の',
	'究極の',
	'チョコ入り',
	'異臭を放つ',
	'4次元',
	'脈動する',
	'得体の知れない',
	'四角い',
	'暴れ回る',
	'夢の',
	'闇の',
	'暗黒の',
	'封印されし',
	'死の',
	'凍った',
	'魔の',
	'禁断の',
	'ホログラフィックな',
	'油圧式',
	'辛そうで辛くない少し辛い',
	'焦げた',
	'宇宙',
	'電子',
	'陽電子',
	'量子力学的',
	'シュレディンガーの',
	'分散型',
	'卵かけ',
	'次世代',
	'帯電',
	'太古の',
	'WiFi対応',
	'高反発',
	'【令和最新版】',
	'廉価版',
	'ねばねば',
	'どろどろ',
	'パサパサの',
	'湿気った',
	'賞味期限切れ',
	'地獄から来た',
	'ニンニクマシ',
	'放射性',
	'フラクタルな',
	'再帰的',
	'ときどき分裂する',
	'消える',
	'等速直線運動する',
	'X線照射',
	'蠢く',
	'形而上学的',
	'もちもち',
	'冷やし',
	'あつあつ',
	'巨大',
	'ナノサイズ',
	'やわらかい',
	'バグった',
	'人工',
	'天然',
	'祀られた',
	'チョコレートコーティング',
	'抗菌仕様',
	'耐火',
	'激',
	'猛',
	'超',
	'群生する',
	'軽量',
	'国宝級',
	'流行りの',
	'8カラットの',
	'中古の',
	'新品の',
	'愛妻',
	'ブランドものの',
	'増殖する',
	'ぷるぷる',
	'ぐにゃぐにゃ',
	'多目的',
	'いい感じ™の',
	'激辛',
	'先進的な',
	'レトロな',
	'ヴィンテージ',
	'合法',
	'プレミア付き',
	'デカ',
	'ギガ',
	'穢れた',
	'品質保証付き',
	'AppleCare+加入済み',
	'えっちな',
	'デザイナーズ',
	'蠱惑的な',
	'霊験灼かな',
	'つやつや',
	'べとべと',
	'ムキムキ',
	'オーバークロックされた',
	'無機質な',
	'前衛的な',
	'怪しい',
	'妖しい',
	'カビの生えた',
	'熟成',
	'アルミダイキャスト',
	'養殖',
	'やばい',
	'すごい',
	'かわいい',
	'デジタル',
	'アナログ',
	'彁な',
	'カラフルな',
	'電動',
	'当たり判定のない',
	'めり込んだ',
	'100年に一度の',
	'ジューシーな',
	'Hi-Res',
	'確変',
	'食用',
	'THE ',
	'某',
	'朽ちゆく',
	'滅びの',
	'反発係数がe>1の',
	'摩擦係数0の',
	'解き放たれし',
	'大きな',
	'小さな',
	'強欲な',
	'うねうね',
	'水没',
	'燃え盛る',
	'高圧',
	'異常',
	'粗挽き',
];

export const items = [
	'魔術書',
	'水神クタアト',
	'エイボンの書',
	'ナコト写本',
	'無名祭祀書',
	'屍食教典儀',
	'エルトダウン・シャーズ',
	'セラエノ断章',
	'黄衣の王',
	'ルルイエ異本',
	'妖蛆の秘密',
	'グラーキの黙示録',
	'カルナマゴスの誓約',
	'銀の鍵',
	'アルハザードのランプ',
	'ダゴンの宝冠',
	'輝くトラペゾヘドロン',
	'ヨス＝トラゴンの仮面',
	'古の印',
	'エルダー・サイン',
	'黄金の蜂蜜酒',
	'アインソフオウル',
	'悪行要論',
	'悪魔の偽王国',
	'アスティルの写本',
	'アストロノミカ',
	'アブラハムの書',
	'術士アブラメリンの聖なる魔術の書',
	'アルキタスの複写本',
	'アルス・ノヴァ',
	'アルス・パウリナ',
	'アルテフィウスの秘本',
	'アルマデル奥義書',
	'アル・アジフ',
	'アレイストの魔譜',
	'イオドの書',
	'イステの歌',
	'殷王神鑑',
	'イーリアス断章',
	'ウガリットの粘土板文書',
	'嘘の書',
	'ヴォイニッチ手稿',
	'易経',
	'慧者の石板',
	'Mの書',
	'エメラルド・タブレット',
	'エメラルド陶片',
	'エルトダウン・シャーズ',
	'エレウシスの祭儀書',
	'エヌマ・アヌ・エンリル',
	'王の棺の書',
	'大いなる女王の詩',
	'オールド・ブラッドショウの時刻表',
	'怪物とその眷属',
	'鏡の国の書',
	'間隙の書',
	'ガルドラボーク',
	'ガールン断章',
	'金枝篇',
	'銀の泉の書',
	'黒い雌鶏',
	'グリモワ断章',
	'黄衣の王',
	'香神経疏',
	'黄帝金匱玉衡経',
	'刻印の書',
	'暦石',
	'ゴエティア',
	'五行大義',
	'山河社稷図',
	'三国相伝陰陽輨轄簠簋内伝金烏玉兎集',
	'サンの七秘聖典',
	'ザンツゥー陶片',
	'最聖の三重の知恵',
	'死者の書',
	'食人祭祀書',
	'真正奥義書',
	'新撰陰陽書',
	'シークレット・ドクトリン',
	'人化の書',
	'ステュクスの楯の書',
	'西欧における魔女信仰',
	'世界',
	'石碑の人々',
	'占事略决',
	'占星暦',
	'千の嘆きの書',
	'創造の書',
	'王の門',
	'ソロモンの大いなる鍵',
	'ソロモンの鍵',
	'胎児の書',
	'黄昏',
	'大奥義書',
	'断罪の書',
	'償いの書',
	'テウルギア・ゴエティア',
	'テトラビブロス',
	'天使ラジエルの書',
	'等価の書',
	'賢者の書',
	'ドジアンの書',
	'ドール賛歌',
	'ナコト写本',
	'ヌクトーサとヌクトルー',
	'ネクロノミコン',
	'ネームレス',
	'般若心経',
	'秘奥の教義',
	'火蜥蜴の刻印の書',
	'雛形の書',
	'碑文',
	'忘却の書',
	'ピカトリクス',
	'ピラミッドの哲人',
	'ファタ・モルガーナ',
	'北欧玉座',
	'実相儀経',
	'ブラック・スートラ',
	'ヘルメス文書',
	'法の書',
	'抱朴子',
	'ホノリウスの誓いの書',
	'ポナペ教典',
	'ポーツマス文書',
	'窓なき館の死者祭宴の書',
	'ミュンヘン降霊術手引書',
	'無貌の書',
	'無名祭祀書',
	'クロウリーの書',
	'メルネイトの化粧板',
	'燃える黄金珠の集成',
	'桃太郎',
	'文殊師利菩薩及諸仙所説吉凶時日善悪宿曜経',
	'モーセの書',
	'ヤヴァナジャータカ',
	'ラジエルの書',
	'楽園の書',
	'黄昏の真説',
	'蛇遣いの遺稿',
	'理想郷',
	'つながりの書',
	'龍樹の玉稿',
	'ルルイエ異本',
	'レメゲトン',
	'連理の書',
	'レ・サンチュリ',
	'ロンゴロンゴ',
	'聖なる魔術の書',
	'グラン・グリモワール',
	'アイオライト',
	'アウイライト・アウイン',
	'アクアオーラ',
	'アクアマリン',
	'アゲート',
	'アズライト',
	'アパタイト',
	'アベンチュリン',
	'アマゾナイト',
	'アメシスト',
	'紫水晶',
	'水晶',
	'アメトリン',
	'黄紫水晶',
	'アルマンディン',
	'鉄礬柘榴石',
	'ガーネット',
	'アレキサンドライト',
	'クリソベリル',
	'アンデシン',
	'中性長石',
	'オレンジ',
	'アンドラダイト',
	'灰鉄柘榴石',
	'アンバー',
	'琥珀',
	'アンモライト',
	'虹色アンモナイトの化石',
	'インディゴライト',
	'ブルートルマリン',
	'ウォーターメロントルマリン',
	'ウォーターメロン',
	'リチア電気石',
	'ウヴァロヴァイト',
	'灰クロム柘榴石',
	'ウレキサイト',
	'曹灰硼石',
	'テレビ石',
	'エメラルド',
	'翠玉',
	'オニキス',
	'縞瑪瑙',
	'オパール',
	'蛋白石',
	'ブラックオパール',
	'ホワイトオパール',
	'オブシディアン',
	'黒曜石',
	'オーロラオーラ',
	'人工宝石',
	'カイヤナイト',
	'藍晶石',
	'カルサイト',
	'方解石',
	'カルセドニー',
	'ガーネット',
	'柘榴石',
	'ウヴァロヴァイト',
	'カーネリアン',
	'紅玉髄',
	'キャッツアイ',
	'猫目石 ',
	'クリソベリル・キャッツアイ',
	'クリスタル',
	'水晶',
	'石英',
	'アメシスト',
	'紫水晶',
	'シトリン',
	'黄水晶',
	'双晶',
	'草入り水晶',
	'クリソプレーズ',
	'緑玉髄',
	'クリソベリル',
	'金緑石',
	'クリソコラ',
	'珪孔雀石',
	'グロッシュラー',
	'灰礬柘榴石',
	'クンツァイト',
	'リシア輝石',
	'スポジュメン',
	'クンツァイト',
	'コスモオーラ',
	'コーラル',
	'珊瑚',
	'ゴールデンオーラ',
	'サファイア',
	'青玉',
	'コランダム',
	'ピンク・サファイア',
	'イエロー・サファイア',
	'スターサファイア',
	'サンストーン',
	'日長石',
	'ヘリオライト',
	'太陽石',
	'サードニクス',
	'紅縞瑪瑙',
	'サーペンティン',
	'蛇紋石',
	'ジェット',
	'黒玉',
	'ブラックトルマリン',
	'シェル',
	'ジェード',
	'翡翠',
	'硬玉翡翠',
	'ジャスパー',
	'碧玉',
	'ショール',
	'鉄電気石',
	'ジルコン',
	'風信子石',
	'ヒヤシンス石',
	'スギライト',
	'杉石・ルブライト',
	'スピネル',
	'尖晶石',
	'スフェーン',
	'チタナイト',
	'くさび石',
	'スペッサルティン',
	'満礬柘榴石',
	'スモーキークォーツ',
	'煙水晶',
	'セラフィナイト',
	'緑泥石',
	'クリノクロア',
	'セレスタイト',
	'天青石',
	'ゾイサイト',
	'灰簾石',
	'黝簾石',
	'緑簾石',
	'ソーダライト',
	'方ソーダ石',
	'ダイオプサイド',
	'透輝石',
	'タイガーズアイ',
	'虎目石',
	'ダイヤモンド',
	'金剛石',
	'タンザナイト',
	'緑簾石',
	'ターコイズ',
	'トルコ石',
	'ターフェアイト',
	'チャロアイト',
	'ツァボライト',
	'灰礬柘榴石',
	'ツリーアゲート',
	'デマントイド',
	'灰鉄柘榴石',
	'デンドリティックアゲート',
	'模樹瑪瑙',
	'トパゾライト',
	'トパーズ',
	'黄玉',
	'インペリアルトパーズ',
	'トリフェーン',
	'リシア輝石',
	'トルマリン',
	'ネフライト',
	'軟玉',
	'軟玉翡翠',
	'パイライト',
	'黄鉄鉱',
	'愚か者の金',
	'パワーストーン',
	'パイロープ',
	'苦礬柘榴石',
	'ハックマナイト',
	'ハックマン石',
	'パパラチアサファイア',
	'鋼玉',
	'パライバトルマリン',
	'バンデッドアゲート',
	'縞瑪瑙',
	'パール',
	'真珠',
	'ヒデナイト',
	'スポジュミン・リシア輝石',
	'ファイヤーアゲート',
	'炎瑪瑙',
	'ブラックオパール',
	'黒蛋白石',
	'ブラッドストーン',
	'ヘリオトロープ',
	'血玉石',
	'石英',
	'碧玉',
	'緑色の碧玉',
	'プルームアゲート',
	'羽瑪瑙',
	'プレーナイト',
	'葡萄石',
	'緑色をした宝石',
	'プレシャスオパール',
	'フローライト',
	'蛍石',
	'ヘソナイト ',
	'灰礬柘榴石',
	'ペツォッタイト',
	'ヘマタイト',
	'赤鉄鉱',
	'黒いダイアモンド',
	'ヘリオドール',
	'ペリドット',
	'橄欖石',
	'オリビン',
	'カンラン石',
	'緑柱石',
	'エメラルド',
	'アクアマリン',
	'ボツワナアゲート',
	'玉髄',
	'ホークスアイ',
	'鷹眼石',
	'青虎眼石',
	'マラカイト ',
	'孔雀石',
	'マリーガーネット',
	'灰礬柘榴石',
	'ムーンストーン',
	'月長石',
	'メラナイト',
	'ガーネット',
	'モスアゲート',
	'苔瑪瑙',
	'モルガナイト',
	'ベリル',
	'ユークレース',
	'ラピスラズリ',
	'瑠璃',
	'ラブラドライト',
	'曹灰長石',
	'ラリマー',
	'ブルーペクトライト',
	'金紅石',
	'チタニアダイヤ',
	'ルビー',
	'紅玉',
	'コランダム',
	'ルベライト',
	'電気石',
	'レースアゲート',
	'縞瑪瑙',
	'ブルーレースアゲート',
	'ラグナレースアゲート',
	'クレイジーレースアゲート',
	'レインボーガーネット',
	'レッドスピネル',
	'レッドベリル',
	'ローズオーラ',
	'ローズクォーツ ',
	'ロードクロサイト',
	'ロードライト',
	'スポンジケーキ',
	'パウンドケーキ（カトルカールとも）',
	'ロールケーキ',
	'ケーキ',
	'タルト',
	'シュークリーム',
	'エクレア',
	'アップルパイ',
	'カスタードプディング（プリン）',
	'マカロン',
	'ゼリー',
	'ムース',
	'ババロア',
	'スフレ',
	'ブラマンジェ',
	'パフェ',
	'モンブラン',
	'ミルフィーユ',
	'バウムクーヘン',
	'ビスケット',
	'クッキー',
	'サブレ',
	'ウエハース',
	'プレッツェル',
	'ワッフル',
	'マドレーヌ',
	'フィナンシェ',
	'ティラミス',
	'チュロス',
	'ドーナツ',
	'ラング・ド・シャ',
	'ショートケーキ',
	'チョコレートケーキ',
	'ザッハトルテ',
	'ガトーショコラ',
	'キャンディ',
	'ドロップ',
	'キャラメル',
	'マシュマロ',
	'グミ',
	'ゼリービーンズ',
	'チューインガム',
	'チョコレート',
	'アイスクリーム',
	'シャーベット',
	'ソフトクリーム',
	'アイスキャンデー',
	'ジェラート',
	'ポテトチップス',
	'ポップコーン',
	'スナックバー',
	'アイスクリーム・コーン',
	'エクレア',
	'ガトー・バスク',
	'カヌレ',
	'クイニーアマン',
	'クッサン・ド・リヨン',
	'グジェール',
	'クロワッサン',
	'サクリスタン',
	'ショーソン・オ・ポム',
	'タルト・シトロン',
	'パルミエ',
	'パン・オ・ショコラ',
	'ピティヴィエ',
	'ビューニュ',
	'ファーブルトン',
	'ブロワイエ・デュ・ポワトゥー',
	'ベニエ',
	'マカロン',
	'ルリジューズ',
	'レモンタルト',
	'ベアクロウ',
	'ポップ・タルト',
	'モンキーブレッド',
	'アプフェルシュトゥルーデル',
	'ヴェックマン',
	'キフリ',
	'クレムシュニテ',
	'シュトゥルーデル',
	'デニッシュ',
	'ミルヒラーム・シュトゥルーデル',
	'リンツァートルテ',
	'キフリ',
	'シュトゥルーデル',
	'ヴァトルーシュカ',
	'ヴェックマン',
	'クニーキュヒレ',
	'カントゥチーニ',
	'カンノーロ',
	'スフォリアテッレ',
	'ゼッポレ',
	'トルタ・カプレーゼ',
	'バーチ・ディ・ダーマ',
	'パスタ・フローラ',
	'パンドーロ',
	'ビスコッティ・サヴォイアルディ',
	'杏仁豆腐',
	'艾窩窩',
	'バナナロール',
	'黒ごまロール',
	'黒ごま汁粉',
	'氷粉',
	'崩砂',
	'炒紅果',
	'重陽餅',
	'ココナッツプリン',
	'水晶餅',
	'カスタードタルト',
	'豆花',
	'龍のひげ飴',
	'牛乳プリン',
	'大白兔奶糖',
	'エッグタルト',
	'パステル・デ・ナタ',
	'卵糖水',
	'鶏蛋仔',
	'八宝粥',
	'フライドアイスクリーム',
	'阜宁大糕',
	'炸鲜奶',
	'生姜牛乳プリン',
	'仙草ゼリー',
	'亀苓膏',
	'貢糖',
	'ハスマ',
	'黄桥焼餅',
	'花捲',
	'酒醸',
	'京八件',
	'ゴマ団子',
	'芝麻球',
	'开口笑',
	'梨膏糖',
	'蓮茸',
	'辣条',
	'落雁',
	'麻花',
	'マンゴープリン',
	'マーラーカオ',
	'蜜三刀',
	'月餅',
	'北京ヨーグルト',
	'年糕',
	'糯米糍',
	'桂花糕',
	'砵仔糕',
	'红豆蛋糕',
	'紅豆湯',
	'紅亀ケーキ',
	'ライスプディング',
	'豆沙',
	'シャーチーマー',
	'鬆糕',
	'糖画',
	'番薯糖水',
	'老婆餅',
	'三不粘',
	'スノースキン月餅',
	'糖葫蘆',
	'湯円',
	'奶糖',
	'タピオカプディング',
	'芋泥',
	'糖水',
	'桃饅頭',
	'倫教糕',
	'西瓜酪',
	'粽子',
	'ミル・クレープ',
	'アイスクリン',
	'あかまき',
	'甘食',
	'あんドーナツ',
	'菓子パン',
	'カステラ',
	'キャラメル',
	'コーヒーゼリー',
	'シベリア',
	'シューアイス',
	'ダックワーズ',
	'生チョコレート',
	'パサン',
	'パフェ',
	'プリンアラモード',
	'フルーツポンチ',
	'抹茶アイスクリーム',
	'餅アイス',
	'モンブラン',
	'ロールケーキ',
	'ロシアケーキ',
	'メロンパン',
	'あんパン',
	'ジャムパン',
	'シナモンロール',
	'クリームパン',
	'チョコレートパン',
	'コロネ',
	'ピーナッツパン',
	'揚げパン',
	'黒糖パン',
	'マーガリントースト',
	'バターシュガートースト',
	'レモンパン',
	'甘食',
	'ぶどうパン',
	'レーズンパン',
	'豆パン',
	'甘納豆パン',
	'ようかんパン',
	'飴せん',
	'あんこ玉',
	'あんこ巻き',
	'あんずボー',
	'あん玉',
	'糸ひきあめ',
	'うまい棒',
	'うまい輪',
	'カタヌキ',
	'蒲焼さん太郎',
	'かりんとう',
	'カルメ焼き',
	'かわりんぼ',
	'甘々棒',
	'きなこ棒',
	'キャベツ太郎',
	'金華糖',
	'クッピーラムネ',
	'黒棒',
	'げんこつ飴',
	'穀煎',
	'ココアシガレット',
	'昆布飴',
	'金平糖',
	'サクマ式ドロップス',
	'さくら大根',
	'さくら棒',
	'酢昆布',
	'すずめのたまご',
	'酢だこさん太郎',
	'すもも漬',
	'仙台駄菓子',
	'ソースせんべい',
	'駄菓子バー',
	'たこせん',
	'玉せん',
	'玉羊羹',
	'タルゴナ',
	'チョコバット',
	'チロルチョコ',
	'都こんぶ',
	'ニッキ水',
	'ねり飴',
	'のしいか',
	'ハッカパイプ',
	'ビッグカツ',
	'ひもQ',
	'冷やし飴',
	'兵六餅',
	'フィリックスガム',
	'フエガム',
	'麩菓子',
	'ブタメン',
	'プチプチ占い',
	'粉末ジュース',
	'鼈甲飴',
	'ベビースターラーメン',
	'奉天',
	'ボーロ',
	'ポテトスナック',
	'ボノボン',
	'ポン菓子',
	'まずい棒',
	'蜜柑水',
	'水飴',
	'ミニコーラ',
	'麦チョコ',
	'焼肉さん太郎',
	'ヨーグル',
	'辣条',
	'ラムネ',
	'綿菓子',
	'豚角煮まん',
	'てりやきチキンまん',
	'チーズまん',
	'塩豚まん',
	'海鮮まん',
	'グラタンまん',
	'餃子まん',
	'もんじゃまん',
	'チョコレートまん',
	'カスタードクリームまん',
	'キャラメルまん',
	'プリンまん',
	'さくらあんまん',
	'焼き芋まん',
	'肉まん',
	'豚まん',
	'あんまん',
	'ピザまん',
	'カレーまん',
];

export const and = [
	'に擬態した',
	'入りの',
	'っぽい',
	'に見せかけて',
	'を虐げる',
	'を侍らせた',
	'が上に乗った',
];

export function genItem(seedOrRng?: (() => number) | string | number) {
	const rng = seedOrRng
		? typeof seedOrRng === 'function'
			? seedOrRng
			: seedrandom(seedOrRng.toString())
		: Math.random;

	let item = '';
	if (Math.floor(rng() * 5) !== 0) item += itemPrefixes[Math.floor(rng() * itemPrefixes.length)];
	item += items[Math.floor(rng() * items.length)];
	if (Math.floor(rng() * 10) === 0) {
		item += and[Math.floor(rng() * and.length)];
		if (Math.floor(rng() * 5) !== 0) item += itemPrefixes[Math.floor(rng() * itemPrefixes.length)];
		item += items[Math.floor(rng() * items.length)];
	}
	return item;
}
