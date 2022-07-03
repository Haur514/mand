<details>
<summary>進捗報告時の注意</summary>

- 先に結論を書く
- Good or Bad を伝える
- 客観的な言葉を使う
    - i.e. ある程度 -> 80%
- 後で見返して，何のことを書いてあるかわかるように書く
    - i.e. 論文を読んだ -> "{論文タイトル}"を読んだ
- 事前に話すことを考えてスマートに話せるように準備
- 最低限Wordの校正で怒られないレベルの日本語になるように推敲する
    - i.e. 各xxxごと -> 各xxx or xxxごと
- 日本語は厳密に使う
    - i.e. 「調べる」と「見つける」は違うので使い分ける
- 全角と半角を混ぜるな．許せん💢💢💢（冗談です）．統一するべき
    - i.e. 「（」と「(」

</details>

# 2022/06/28
## M2全体
- CSセミナーの発練は最低一回する
    - 期限は発表日の二日前まで

## k-kotou
- コミットの数ではなくリファクタリングの数を書くべき
    - 一つのコミットで複数のリファクタリングが行われていることもある
- 調査結果は良さそう?
    - RMinerが検出できなかったリファクタリングは見つかった
    - それらはRMinerがサポートしていないリファクタリング
- RMinerがサポートしているリファクタリングのみを対象としている理由は？

## m-iriyam
- abstの締切
- 発練の希望日程をslackで連絡

## r-takaic
- 今日できることやって校正に投げる

## shu-hsmt
- 今のネタを続けるか新ネタ

## h-yosiok
- scam通ったら日本語の論文誌
- 7/1に新ネタを決める

## y-kaimor

## hkr-kubo

## ryg-wtnb

# 2022/06/21
## k-kotou
- 「目視でリファクタリングされた箇所を調査」と書く
- 例に挙げているのはExtract Methodではない
    - 他にRMinerが検出できなかったリファクタリングはあるか？
        - ラムダ式，三項演算子は何個調べて何個見つかったか
- Langを選択した理由
    - Mathとかも調べるのもアリ
-　発表するときに必要な材料を揃える
- CSセミナーは一度発練した方がいい
    - 時間は後日先生に相談
## m-iriyam
- 結果が出たけど、次の研究指針はどうするか
    - APRを増やすかバグを増やすかとかの指針になりそう
    - 方向性を変えるなら前に話した複数のfailするやつで疑惑値を調べるとかのネタをやってみる？
- SESか10月ss

## r-takaic
- 特になし

## shu-hsmt
- immutabilityだけじゃなくてpurity（副作用を持たない）とかで検索してみる？

## h-yosiok
- 特になし

## y-kaimor

## hkr-kubo
- 院試前までに動作確認

## ryg-wtnb
- 特になし

# 2022/06/14
## k-kotou
- 強みというより特徴では？
    - そういう手法では?
    - 「種類がわからないリファクタリングを受け取るとRMinerは種類を特定する」というニュアンスにみえる
- 何個調べて何個見つけたか？ 
- 回帰テストとはどういうテスト？
    - 相互にテストをかけるのなら回帰テストではないのでは？
    - 後のコードから生成されたテストを前のコードにかけるのは回帰テストでないかも
- 「対策」は優先度低い
- 個別ミーティングあとで

## m-iriyam
- OutOfMemoryの結果が芳しくない..
    - 提案手法のやり方の方が良くないと言う印象を感じる結果に見える
    - 見せ方の工夫をしましょう

## r-takaic
- 特になし

## shu-hsmt
- 修正して一日おいて見直す

## h-yosiok
- タイトルの変更
- とりあえず提出してあとでアブストを変更

## y-kaimor
- 卒論のテーマは決まっているんだし、スライドを作ってきてね
    - 研究の目的と手法を人に説明できるレベルに

## hkr-kubo
- 佐々木さんのツールの実行は調書終了後なるべく早めに
- 括弧を統一

## ryg-wtnb
- 院試前にお試しで触る
    - 競プロのソースをネットで適当に拾ってEvoSuiteで生成してみる

# 2022/06/08
## k-kotou
- テストが生成されるかを調査
- 自作クラスと内部ライブラリで定義されたクラスの比較を行う目的は？ 
    - 内部ライブラリであればテスト生成できそうという仮説と矛盾？

## m-iriyam
- ヒープをたくさん与えて最大メモリ使用量を測るようにしたほうが研究としての説得力が増すのでは？
    - 調べてね

## r-takaic
- 被験者実験の御礼の日程，6/24で可能かどうか

## shu-hsmt
- 他の人の原稿を見てみる（論文のルールを把握する）

## h-yosiok
- NonBは冗長
- 金曜日に橋本さんを通してfolteに校正を依頼する

## y-kaimor

## hkr-kubo

## ryg-wtnb

# 2022/06/01
## k-kotou
- 提案手法が有効な理由だと考えたのならその理由を説明できるように
    - Extractだと新しいメソッドが別に作られてるからコミット前に作ったテストは実行できないのでは？
    - -> シグネチャが変わっていないのなら分離元メソッドを実行できれば検証できそう
- privateをpublicに書き換えれば実行できるのでは？
    - そこら辺含めてEvosuiteを実行してみたらいいかもね
- 今のevosuiteなら非プリミティブ型の場合でも生成できるかも
    - 一度実行してみて確認する
    - 五年前の論文なので、今と機能やバージョンが異なることが多いかもしれないと考えることも大事
- 個別ミーティングの日時，金曜の18時以降


## m-iriyam
- Overfitを生成する場合と何も生成しなかった場合の時間差は？
    - Overfitのパッチはいらなくね？
    - 研究者の中で共通認識はない -> この実験では何も生成できないものは考慮しないなど定義した方がいいかも
    - 「Overfitか正しいかは関係なくパッチが生成される」と定義すると時間切れで生成できなくなる...
    - *勝てるようなルールを自分で作るのが大事*
- 前に言ったように、落ちるテストが複数ある時に多数決みたいにやってみていいかもしれない

## r-takaic
- とくになし

## shu-hsmt
- introとconclusionは最後に書く
- 手法と実験を先に書くべし！
- 手法部分を添削してもらっている間に実験を書くなど時間を有効に使いましょう
- 提案手法締め切り：6/6(月) 

## h-yosiok

## y-kaimor

# 2022/05/24
## k-kotou
- 従来ではクラスのキャストミスによる例外処理を修正できないことが多いので解決したい
- 全バグのうち、どのくらいの割合でimproveさせたい例外処理が起きているのかを調べて、そんなに頻度がないのなら研究としてのインパクトがなさそう
    - やること1: 例外処理を研究ネタにするなら研究動機として内訳調査をしてみる
- 個別ミーティングはこのあと

## m-iriyam
- 実行時間：そこまで優位性がなさそう
    - allを使った場合とselectでやった場合とでAPRにかかる時間を比較してみれば優位性がわかる
    - selectの方が短くなったらそれで発表でよさそう
    - D4jに対してkGPを使って検証してみて

## r-takaic
- ドキュメントは古藤くんのミーティングの後でみせる

## shu-hsmt
- 34つのクラスのうち20クラスがサブクラス化可能または抽象クラスという理由でミュータブルになっている
    - 論文で記述するなら主張したいことは？

## h-yosiok
- MD輪講に挙げた論文と自身の研究の差異は？
- 今週末(できれば5/26)までに添削していただいた論文を修正する．
- 久保くん1日目

## y-kaimor
- 読む予定の論文が難しかったら先生に訊いてもOK

## hkr-kubo
- 入山さんに教えていただく
    - kgpをd4jのmathに適用するときの`packageが存在しない`というエラーについて

## ryg-wtnb
- 特になし

## misc
研究希望調書添削担当

| | y-kaimor | hkr-kubo | ryg-wtnb | 〆切 |
|:--|:--|:--|:--|:--|
| 1周目 | k-kotou | h-yosiok | shu-hsmt | 6/9（木） |
| 2周目 | m-iriyam | r-takaic | m-iriyam | 6/16（木） |
| 3周目 | higo | higo | higo | 6/23（木） |

# 2022/05/17
## k-kotou
- 研究内容を変えるのでは？
  - 結論を書いた方がわかりやすい
  - 結論：ネタとしては少し実現みが薄そう

## m-iriyam
- どんな時に悪くなるor良くなるのか？
- 個別MTGで行ったことはやってみても良いのでは？
    - 今の内容を一度発表してからやります
- ses or 10月のss で発表を目指す

## r-takaic
- 5/24 or 5/25にドキュメントを肥後先生に見せる
    - できれば24に見せたい

## shu-hsmt
- このまま進める

## h-yosiok
- 参考文献を増やす．目標は40個ほど
  - 一行だけでも引用すれば説得力が増す

## y-kaimor
- 出してた宿題頑張って

## hkr-kubo
- 読むべき論文のタイトルを書くなど，詳細についても書いておくと後々役に立つ
- [kGP-exp](https://github.com/kusumotolab/kGenProg-exp)に実験用のスクリプトがある
## ryg-wtnb
- 具体的な内容を書いておくとよい


# 2022/05/10
## k-kotou
- 実バグを提案手法によってどのようにして修正できるのか
    - 数値の近さという情報は使わないの？
    - バグが見つからなかったので新しい手法で別のバグを修正する
- 新しい手法の説明をかいとく(ミーティング後に説明してください)
- 個別MTG：5/11 15:00～
    - 説明の際には、こういうバグに効きそうということまで話してほしい

## m-iriyam
- 実験の意図は？
    - 欠陥箇所単位よりもバグ単位でやったほうがいいのでは？
- 複数箇所の場合はどう評価？
    - TopNを使えばいいかも
        - 一箇所だけの修正ならいいかもしれないけど何箇所もあるならまずいのでは？
    - 同じ疑惑値がいろんな箇所にあると、その中のどれを使えばいいの？(やり方はわからんけど)
    - 別指標で評価しても劇的に良くなるのか...？　(正直不明)
    - どこかで話しましょう
- 個別MTG：5/11 15:30 or 16:00～（k-kotouのMTG後）

## r-takaic
- 著者についてはrocketchatできく
- 被験者は対面で募集してみるといいかも？
- 再来週には被験者実験の準備を終わらせたい（r-takaicの意思）

## shu-hsmt
- `NOT_IMMUTABLE`と出力されているが，immutableな可能性があるクラスが存在
- mutable ditectorに実行時オプションをつけてその出力結果でmutable/immutableを目視確認

## h-yosiok
- 関連研究を伸ばす
- 5/22肥後先生に提出

## y-kaimor
### done
- スリッパ
- 個別MTG：5/13 16:00～
### todo
- 個別MTG : 5/24 14:00〜

## hkr-kubo
- 特になし
- 個別MTG：5/13 15:00～

## ryg-wtnb
- 特になし
- 個別MTG：5/12 13:00～14:00?
    - メモを準備

# 2022/04/28
## k-kotou
- 提案手法は？
    - 3種類あるの?
    - 3つ目のバグを修正する手法を先にやる
        - 他の手法は後回し
        - 提案手法を使うとどのように修正されるかがわからない
- 実例の一つ目をどうのようにして解決するのか?
- パッチ生成に失敗したものを調査するべき
- 提案手法で解決できそうな実バグが見つからなければ別のネタをやるのもあり
- オーバーフィットをなくすのでなく、そもそもパッチ生成できなかったものを調べるべきなのでは？
    - 106-14 = 92個について調べてみる
    - Mathプロジェクトは数値計算と相性がいいから、これで実行できなかったら研究手法そのものが少し良くないと当たりをつけられる
    - 

## m-iriyam
- 各行が実行されたかどうかがみてるだけで何回実行したかをみていない
    - あくまで意見
    - たとえば，ループ回数は見てない
- テストケース生成時間はそこまで心配しなくていいのでは？(これは既存ツールの領分で、フィルタリングが研究のコアな部分)
- 7月のSIGSSに発表できるか？
    - 次のMTGまでにいい結果が出れば行けるかも
    - jssstは今のネタの結果がよさそうなら後回し
- 国際会議に出すなら、谷口くんのフォーマットを見てね

## r-takaic
- 時間，コードの修正量を測る？
- 時間計測をどうするか
- バイト代は出せる
- この後ミーティング

## shu-hsmt
- 発表できそうな材料はそろってそう
- 7月発表する
  - CSセミナーを楽にできる

## h-yosiok
- related work内でsubsectionを取る
- あまり関連していない手法も水増しとして書く
- 日本語締切5/22
- 英語締切6/10

# 2022/04/19
## k-kotou
- 研究紹介：「既存研究が〜、提案手法であれば〜」みたいな紹介の方がわかりやすいと思われる
- 実バグの数は少なくても，提案手法によって解決できそうな実バグならよい
- バグを全部調査してから再度報告

## m-iriyam
- テストを与えられた時に、それぞれがコントリビュート(バグ特定に寄与)するわけじゃないので、いらないテストを弾くみたいな逆転の発想があってもいいのでは？

## r-takaic
- 3をやる前にREADMEを作って肥後先生に見せる
- SE研究発表会(申込締め切り：5/16) 

## h-yosiok
- 4/21に肥後先生に提出する

# 2022/04/12
## k-kotou
- 深層学習ベースのAPRの精度は深層学習ベースではないAPRの精度と比べて高いか？
- 提案手法により改善できそうな実バグの例
    - なぜの部分を報告に書く
        - 今回の例では、治りそうなバグの例を持ってきてそこからどんなバグが治るのかを確認するなどの論理的な流れが欲しい

## m-iriyam
- テストの結果で、悪くなったとしてどの程度の度合いで悪くなったのかを調べた方がいいかも
    - 回帰曲線の傾きが負になっているものもあるわけだから、要員の方を捜査してもいいかも

## r-takaic
- DOINGのやつができて，評価指標間で評価が異なるような問題が見つかったら，被験者実験でどっちの評価がもっともらしいかを調べたい

## shu-hsmt
- 就活がんばれ

## h-yosiok
- 10日後にASEの日本語のやつを肥後先生へ


## m-iriyam
- 各行が実行されたかどうかがみてるだけで何回実行したかをみていない
    - あくまで意見
    - たとえば，ループ回数は見てない
- テストケース生成時間はそこまで心配しなくていいのでは？(これは既存ツールの領分で、フィルタリングが研究のコアな部分)
- 7月のSIGSSに発表できるか？
    - 次のMTGまでにいい結果が出れば行けるかも
    - jssstは今のネタの結果がよさそうなら後回し
- 国際会議に出すなら、谷口くんのフォーマットを見てね

## r-takaic
- 時間，コードの修正量を測る？
- 時間計測をどうするか
- バイト代は出せる
- この後ミーティング

## shu-hsmt
- 発表できそうな材料はそろってそう
- 7月発表する
  - CSセミナーを楽にできる

## h-yosiok
- related work内でsubsectionを取る
- あまり関連していない手法も水増しとして書く
- 日本語締切5/22締切
- 英語締切6/10

# 2022/04/19
## k-kotou
- 研究紹介：「既存研究が〜、提案手法であれば〜」みたいな紹介の方がわかりやすいと思われる
- 実バグの数は少なくても，提案手法によって解決できそうな実バグならよい
- バグを全部調査してから再度報告

## m-iriyam
- テストを与えられた時に、それぞれがコントリビュート(バグ特定に寄与)するわけじゃないので、いらないテストを弾くみたいな逆転の発想があってもいいのでは？

## r-takaic
- 3をやる前にREADMEを作って肥後先生に見せる
- SE研究発表会(申込締め切り：5/16) 

## h-yosiok
- 4/21に肥後先生に提出する

# 2022/04/12
## k-kotou
- 深層学習ベースのAPRの精度は深層学習ベースではないAPRの精度と比べて高いか？
- 提案手法により改善できそうな実バグの例
    - なぜの部分を報告に書く
        - 今回の例では、治りそうなバグの例を持ってきてそこからどんなバグが治るのかを確認するなどの論理的な流れが欲しい

## m-iriyam
- テストの結果で、悪くなったとしてどの程度の度合いで悪くなったのかを調べた方がいいかも
    - 回帰曲線の傾きが負になっているものもあるわけだから、要員の方を捜査してもいいかも

## r-takaic
- DOINGのやつができて，評価指標間で評価が異なるような問題が見つかったら，被験者実験でどっちの評価がもっともらしいかを調べたい

## shu-hsmt
- 就活がんばれ

## h-yosiok
- 10日後にASEの日本語のやつを肥後先生へ


# 2022/02/28
## k-kotou
- 出てほしい出力結果の具体例があるとよい
- 全部の単語列を出力するのは上手くいかなさそう
    - 別のアプローチを試す 
    - 部分的なシーケンスのみを対象としたコード修正にしてみるとか
## m-iriyam
- JaCoCoは分岐網羅率の計算できる？
    - 分岐網羅率の計算をできるかどうか、やり方が正しいか調べ直すかも？
    - EvoSuiteの方に書いてあるやり方を読んでみて
- メソッド単位での結果を計算したあとにその結果を議論しましょう
## r-takaic
- TODOのBLEU以外の評価指標で少ないデータ数のグラフがどうなるかみたい
- edit distanceとかLCSの結果来週

# 2022/02/18
## k-kotou
- 実装してから結果を出してね

## m-iriyam
- 条件網羅率を計測する良さそうなツールがOSSにはなさそう
    - 条件網羅率を計測できそうな有償のものがあればそれを買いましょう
## r-takaic
- GANの方が大幅によいものを上位10件調べるのがよいかも

## shu-hsmt
- 調査環境について具体的に書き直す
- 来週にはApatch Projectの結果を出したい

# 2022/02/10
## k-kotou
- 問題をどう対処するか目処がたちそう？
    - 頻繁に発生する問題か？
        - 8割ぐらい
    - 既知の問題なので参考文献を調べる

## m-iriyam
- 実行経路 -> 追加したテストが欠陥箇所を実行するかどうかという意味で述べた
- 欠陥箇所が実行されないテストケースは精度の向上に寄与？なぜ？
    - ochiaiのアルゴリズムにより疑惑値が下がった？

## r-takaic
- このまま進める

## shu-hsmt
- このまま進める

## h-yosiok
- 添削依頼するまえに音読する

# 2022/02/04
## a-maejim

## a-fujimt
- ASE\おおおおお/

## s-ogino

## k-kotou
- 対象のプロジェクトに対して既存手法の精度は？
    - 修正対象が異なるので比較が難しい
- そもそも修正できないかも
- 訓練データの割合は？
    - 7（訓練データ）:3の方で試す
    - 同じ訓練データを使い回す
- 修正の精度の求め方
    - 修正できた数をそのまま出すほうがよさそう
- kvasirのGPUの方なら動かして大丈夫

## m-iriyam
- 長さは4pジャスト(参照無しで) -> OK
    - 終わったら見せて

## r-takaic
- データ数が少ない場合の実験を続ける

## shu-hsmt
- mutableのまま使われているものが多いというのは知見になりそう
- mutableからimmutableに変化している理由の調査
    - フィールドや親クラスに対しても調査する
    - Hashtableが怪しいかも？
- javaプロジェクトについてはslackで聞く


## h-yosiok
- 前書き，関連研究で多く引用する．


# 2022/1/28
## a-maejim

## a-fujimt
- 正解グループ固有の特徴
    - 例が少ないので難しいかも

## s-ogino

## k-kotou
- マイルストーンを決めて研究する方がいいのでは？（あまり進んでいないように感じる）
- 自身で具体的な進捗方針(~までには..するとか？)を決めておいた方がいいと思う

## m-iriyam
- D4Jの中にあるプロジェクトを対象にしているよね。
- 時間外になったテストは失敗したことになる
    - 元々うまく行っていたテストも失敗してしまう
- グラフの目盛りは合わせましょう
    - (higo)x軸とy軸を0〜1にしてみたら？ (y > x or y < xで視覚的にわかりやすい)
    - (iriyam)カバレッジが上がるほど精度が上がるのかを調べているので、最もカバレッジが増加した時の順位が良くなったか調べたい
    - いらない正の傾き情報を間引いたら良さそうなデータが出るかな？
        - 正の傾きが発生する理由を考えてみて

## r-takaic
- 月曜日に結果報告

## shu-hsmt
- markdownの書き方（同じ話をしているのか，別の話をしているのか）
    - 段落を工夫
    - 現行のプログラムではなくツール
- TODO
    - Set型でもいいので来週までに結果をだす
    - Map型調査時に見つかった2件のMutable→Immutableに変化している自作クラスの変更理由の調査

## h-yosiok
- 


# 2022/1/21

## 全体確認
- 吉岡くんは第一版をM1に、第二版をM2に送る
    - その際には日程を調整

## a-maejim
- freyが全部あくので使っていい

## a-fujimt
- 案2でいく
    - seed値が少ないということを妥当性の脅威にかく 

## s-ogino

## m-iriyam
- x軸とy軸を書いてx軸に元々のテストを使った時の疑惑値の上位を示すのと、y軸に新しく追加したデータのように軸定義を変えて相関関係を示すようにしたら？
- ちょっとマシをもうちょい上手く表現できないか？
- 悪くなっている場合はなんでテストを通過しているのに悪くなっているのか、それに関して個別に事例を調べてその知見をもとに追加したらいけないテストの特徴を出したらいいかも
- icpcは頑張って

## k-kotou
- モデルが正しく動くかどうかの確認方法
    - 精度が良いかで評価
    - Scholarの方でも'c language testcase databanch'などのように調べてみたらいいかも知れない

## r-takaic

## shu-hsmt
- HashSetだけ確認する(Setは除外)
- Not ImmutableはMutableと同じ意味かどうかを確認する
- 困っていることについてはとりあえず無視

## h-yosiok
- jaccard係数
- 立命館の人と発表する(日程未定)

# 2022/01/14
## a-maejim
- 林先生の質疑「世代で区切るより時間で区切る方がいいんじゃないか？」
- 10世代で10個の設定だとAPRツールごとに実行時間の差が結構ある
- この後相談する＋タイトル決める

## a-fujimt
- 書類は楠本先生にお願いする

## s-ogino

## k-kotou
- まずseq2seqで修正できるかを確認(最優先)
- 作成中のモデルの動作確認をどうするか？

## m-iriyam
- 実験のやり方があらい
    - 既存のテストで限局できている場合とない場合で実験を分けて説明できたほうがいいかも
    - うまく限局できていない時にiriyam手法で向上しているかをいえたら良さそう

## r-takaic
- 来週にはseq2seqの結果がでそう
- 他のデータセットに対して実行するのはあり
    - SIGSSでは(間に合わないなら)試さなくて良い
    - 優先度低めにする

## shu-hsmt
- 解析できないものは最初から取り除く
- 動かなかったプロジェクトは14個
- 60個のプロジェクトのうち37個のプロジェクトで自作クラスが利用されていた
    - 全部で何件のMapの定義があって，そのうち何件が利用されているか調査
- mutableのまま使われ続けているというのは新たな知見になりそう
- TODO
    - MapだけでなくHashSetに対しても実行
    - MutableからImmutableに変わった理由を調査




## h-yosiok
- 

# 2021/12/21
## a-maejim
- 新しいマシンが使えるようになる
- このあと相談する

## a-fujimt
- 前提の妥当性
    - 論文なり，プレゼンなりの説明を工夫する
    - テストの十分性を説明する
        - パッチ間のテストカバレッジ
- 修論 → 英語(できればfull paperで)

## k-kotou
- 結果はいつ頃でそう？
    - 実験の結果が2月ごろ
    - うまくいくかどうかの選定用の結果をまとめるのは1月の中旬

## m-iriyam
- 表に出しているのはstatementのカバレッジ
    - もっとちゃんとしたところでカバレッジを測ってみたらどう？
- SANERの不採録は論文のページ数が十分あれば可能なの？
    - 既存研究との差異をはっきりと言えればもしかしたら？
    - 1,-1,-1という評価だったけど、ちゃんと論文書いたからどこかに通したいね
- Mathひとつにかかった時間は高々1時間程度
    - D4JをkGPでコンパイルする時に生じるエラーが原因
    - テストケースをコンパイルする際のエラー
    - 他の実行できない原因はコンパイルエラー
        - EvoSuiteを実行する際にテストのコンパイルエラーが生じてしまって処理されない
    - D4jのコマンド実行でできないのは環境の問題
- カバレッジと疑惑値の関係を見たいということは回帰曲線が右下がりになった方が精度が高くなると言えるのでは？
- 大量のデータ使うなら回帰曲線を出す自動スクリプトとか作っておいてもいいかもね

## r-takaic
- 低すぎる原因を調査中
- 3月ごろに論文
- 確認作業をしていたことをミーティングで報告

## shu-hsmt
- String型以外とは？
- 62プロジェクトの中でString型以外のKeyが使われている箇所が何件かを確認
    - この情報があって初めて、手法を適応して良い結果が出るということがこの研究の意義よね？
 - Keyに使われているクラスがミュータブルか調査において対象は？
    - 自作クラス
    - 目視確認はいつ頃終わりそう？
- 進捗報告の書き方
    - DONEかTODOが欲しい

## h-yosiok

# 2021/12/10
## a-maejim

## a-fujimt
- 特になし

## s-ogino

## k-kotou
- 論理エラー用コードは具体的に何？
    - CloseToZero
    - テストに失敗するコードとは？
- モデルの具体的な構造を思案について
    - 既存研究で利用しているモデルは?
    - 別のモデルを使う理由は？
        - 最初に既存研究のパラメータで試す

## m-iriyam
- テストケースは人間が書いたものに機械が生成したものを１つ追加したもの
- 人間が書いた時のテストケースより疑惑値が増えているのか？

## r-takaic
- 特になし

## shu-hsmt
- javaの`final`はオブジェクトを
- オブジェクトがミュータブルなことが原因でバグが発生
- クリティカルな質問はなかった
- MD輪講の資料はブラッシュアップする必要なし

## akir-iga
- 欠席

## h-yosiok

# 2021/12/03
## a-maejim
- 10に論文見せれるようにする．

## a-fujimt
- 10に日立側に論文を提出する
    - 早くできていれば肥後先生に添削をお願いする
- 実験データは色々とっておく
    - SSで載せられない部分も修論で
    - 今後full paper書くときにも使える
- パソコンさんが暇なときにバグ予測の前処理をする

## s-ogino

## k-kotou
- CSセミナーの質問
    - どの程度の論理エラーが修正できることを目指す？
        - 簡単なプログラムor修正する行が少ないプログラム
        - 後者の回答としてよい

## m-iriyam
- CSセミナーの質問はどうだった？
    - 研究意義を問う質問：既存テストでも十分欠陥現局可能なのでは？
    - 自動生成されたテストで逆に精度が下がるのは？
        - どちらとも言えないなぁ(higo)
    - CSセミナーの質問確認は？ -> しなくていいです

## r-takaic
- CSセミナーの発表確認のお願い
- 人が解いた時のBLUEスコアが知りたい
    - データセット内にプログラムは複数あるので，それを使って出すのは？
        - まつもと先生にこの方法でよいか聞く
        - アルバイトとして学生に手伝ってもらう

## shu-hsmt
- CSセミナーの日時（今日の17時でよいかは肥後先生の都合しだい）
- Classのキーが使われているMap型が存在
    - 自分のプロジェクト内で定義されたキーが使われているということ
    - 目視確認するよりクラスの完全限定名を出力
    - class名と合わせてimportの部分を抽出すればいいのでは？

## akir-iga
- 欠席

## h-yosiok
- Mathなどプログラムの処理に関して卒論に書いた方がいい

# 2021/11/26
## a-maejim
- 日立のミーティングは最小限のコストでいい．概要だけしゃべる．スライドも中間報告とか九大のものでいい．
- このあと5時からみてもらう．

## a-fujimt
- 特になし
- 日立の資料は，当日までに指定の場所に入れておく

## s-ogino
- なぜ、メソッド粒度だとだめなのかを考察すべき。

## k-kotou
- DeepFixはSyntaxエラーのみに有効
  - それでも大丈夫？
  - 既存研究(Syntaxなエラー)でなく新しい研究(論理エラー)に着目しているということでディフェンスする？
- 時間は後で送る

## m-iriyam
- 本日欠席

## r-takaic
- メール送ってもらってちょうだい
    - ３月に発表してほしい

## shu-hsmt
- 細かな時間帯は連絡して

## akir-iga
- 本日欠席

## h-yosiok
- どういう条件で提案手法が良くなる？

# 2021/11/19
## a-maejim

## a-fujimt
- 例の文献は関連研究に

## s-ogino
- 新ネタについて、このまま何にも使わないのはもったいないので
    - 暇な時に、これまでの成果をスライドにまとめる。
    - 肥後先生に報告する

## k-kotou
- 欠席

## m-iriyam
- MD輪講の資料はOK

## r-takaic
- 既存手法のうち１つだけ（１番簡単なもの）のBLEUスコアだけ比較すればよさそう
- 著者らに生データを要求してみる
- 正解コードと生成コードのn-gram的な合致部分を可視化したい
  - 既存手法と比べてなんで上手くいっているかを議論できるようになる
  - 今後必要になりそう

## shu-hsmt
- application softwareに絞った理由
    - 継承関係を辿るのが容易そう
    - aplication softwareに絞らず他のドメインでjarが公開されているのものがあるかを調べる
- 継承関係を手動で調べている理由
    - 親がmutableで子がimutableの場合がある
    - 自動化する(jdtとか使って`class`の`extends`節を見る)
- 別の切り口について
    - commitメッセージを確認
    - classにfinal修飾子がついている場合は親クラスとして利用することはできないということ
        - mutableかどうかを確認することはできない
- ミーティングはaplication softwareに絞らず他のドメインでjarが公開されているのものがあるかを調べた後で困ったら


## akir-iga
- 欠席

## h-yosiok
- slackで掲載データを送る

# 2021/11/12
## a-maejim
- ミーティング後相談

## a-fujimt
- ミーティング後相談
- パッチ当てる
    - やるなら手作業
- flakyのコストは低い
    - やる価値はある
- テスト生成回数
    - これやる
- テスト生成クラス
    - やってみると良さそう
- 目視確認まだのやつはRGT使う→やっぱりなし
    - 提案手法と同じことをしているため
-
- ◯APRツールごとのグループ化の効果→
- ◯グループごとの性質
- 99 カバレッジの影響を分析（カバレッジの大きいものを減らす？）
- ◯別のツールから生成したパッチが同じグループにあるか
- 分類の良し悪しと修正が行われているメソッドの種類（private, static, ...）を調べる
    - むしろメソッドの複雑度，長さとかを調べる


## s-ogino
- とりあえず来週の結果を楽しみにする。

## k-kotou
- 欠席

## m-iriyam
- 修正したものを再度肥後先生に見せて欲しい
  - 11/15月曜日午後３時までに送って欲しい

## r-takaic
- 複数の解答をどうするか
    - その中からベストなものを使う
    - 既存研究との比較をどうするか
        - 後で相談

## shu-hsmt
- MD輪講
    - あげてた論文はやめたほうがよい
    - 候補１：既存研究の著者がICSE2016に投稿している論文
    - 候補が見つかったら良い論文か相談
- DOINGについて
    - slackメンションで送った事例がMotivationとして良さそうかを確認


## akir-iga
- KotlinとScalaは後回し

## h-yosiok
- 先輩のSIGSSのリポジトリを確認

# 2021/10/29
## a-maejim
- 11/5(金)のミーティング後にスライド見てもらう．中間報告の内容＋実験結果

## a-fujimt
- Math 70については，テストのseedを増やす
- 追加実験はこれでOK
- 木曜午前に研究会のスライドチェック

## s-ogino
- 今後の身の振り方は？
    - 今の所、旧ネタで修論を書く予定。

## k-kotou
- 先行研究の動作実装
    - 調べながらやる
    - 時間かかりそうなら別のやり方を考える
    - 古いライブラリで環境を整える方がよいかも
    - 今後の成果次第ではそもそもやらない可能性があるので確実に成果が出る方法を取ってもいいかも
- （メモ）MD輪講の結果をそのまま利用するのは問題ないが、セミナーでは自身の研究のことも紹介しないといけない
## m-iriyam
- Grammarlyという添削サイトのアカウント情報をSlackに書き込んでいるので有効に活用してね
- 新ネタはまだいい

## r-takaic
- TSEのデータセットを使って提案手法を適用することを優先
- 暇なら既存手法を動かせるようなツールもCoDas4CGに入ってるか確認

## shu-hsmt
- releaseのところでjarファイルが公開されているので利用できるかも
- Mutableなクラスがバグを実際に引き起こしているかを調べる
    - すでに見つかったものから優先
    - 他のプロジェクトは後回し
- MD輪講の結果をそのまま利用するのは問題ないが、セミナーでは自身の研究のことも紹介しないといけない

## akir-iga
- JavaのASTはJDTを使用

## h-yosiok
- グラフの形式について，縦を対数軸に，また棒グラフにした方が良い
  - 全ての場合を説明する必要はない
- 検知できないバグの原因は調べなくても良い
- 行挿入時はバグの検出は後ろの行（論文によっては前の行）に検出される


# 2021/10/22
## a-maejim
- 九大の発練を11/4-5あたりにお願いする．発表は10-15分くらい
- Astnodeがわかんなかったら藤本くんとか肥後先生にきくといい
- Atcorderの問題を解いているメソッド以外(文字列のReader)に対してのミュータント生成は削っていい

## a-fujimt
- グループでCorrect/Plausibleがないかどうかを確認する
- バグの数が少ないので，見るグループ数を増やす
- 九大の発練は，必要なら連絡する

## s-ogino
- 特になし

## k-kotou
- 荻野さんにヘルプ
- GPUサーバの容量
    - PCのストレージの容量
    - ファイルの使用者を見て，削除or移動をお願いする
    - MD題材はやりたいものに決定

## m-iriyam
- SANER2022の論文
    - リポジトリ作って役割分担
    - 優先度高め

## r-takaic
- NTTのスライド

## shu-hsmt
- 余裕があれば対象プロジェクトを増やして実験
- KeyがObject型でないプロジェクト
    - 結果を書いてほしい
    - 実行時に子クラスが入っているかをチェックする必要がある
- 20個のプロジェクトの選択方法
    - star数が多いものから解析しやすそうなものを選択した
    - 解析しやすそうとは?
        - 恣意的にならないように
- MutabaleかつObject型のプロジェクト4つ
    - Object型がMutable？



## akir-iga

## h-yosiok

# 2021/10/15
## a-maejim
- このあとatcoderのDBみてもらう
- SStuBsの実装しない(できなさそうなもの)変異MissingThrowsException，DeleteThrowsExceptionを実験しないことでどれくらい結果に影響しそうかどうか

## a-fujimt
- vspaceは面倒でない程度でやる
- テストの品質調査をするなら数をもう少し増やしたい．

## s-ogino
- このあと採録条件への対応策の意識合わせ。

## k-kotou
- randomで連絡後，pythonのバージョンを変えて良い
- ストレージ不足についてもう少し調べる
- C言語のままでDeepFixと比較
    - テストケースは既存研究のものを利用できるかも
        - Javaが得意だからそっちでするのは理由として微妙
    - Javaプログラムの修正用に変更するのはかなり労力がかかりそう

## m-iriyam
- @ignoreの実装予定は？
    - ちゃんとするならASTノードにすることだけど、それは実装的にしんどそう
    - (iriyam)単に読み込んで正規表現とかでやってみる
    - (higo)テストメソッドを一行に変換して各行の先頭につければ楽そう
        - これでやる

## r-takaic
- ミーティングの日程調整（はやめに）

## shu-hsmt
- 抽象クラスを継承しているクラスの検出方法
    - extends節を見ればよさそう
    - 全部の継承関係を取ってきて推移関係を得る
    - 動作確認のためなら手動で行うのも有り
- COULD_NOT_ANALYSEの発生
    - オプションを調べてみる
    - 原因をもっと詳しく調べる
- mutableなkeyの使用によるバグの発生
    - 既存研究に調査方法が載っているかも
    - 対象のコミットを取得,grepで探す

## akir-iga

## h-yosiok
- ASTNodeの取り出しがうまく行かなさそうなら肥後先生に相談する


# 2021/10/08
## a-maejim
- 
## a-fujimt
- ページ数少なくなりそうなものから優先して修正

## s-ogino
- 上振れ、下振れを考える。ランダムにやる場合、複数パターンでやってみる。
- 対照実験を心がける。ファイル粒度でもやるとき、メソッド粒度でやるときと同じメトリクスを使う。

## k-kotou
- テストの実行結果の値の調査の目的
    - 入力値として何が使えるかを調べるため


## m-iriyam
- 疑惑値に応じてテストケースのランク付？
    - 疑惑値が高いものがバグを含んでいるとしてテストケースのランク付を高くするなどの工夫をする
- @ignoreの切り替えは難しい？
    - できそう

## r-takaic
- このまま続ける

## shu-hsmt
- フリーのMavenプロジェクトの解析を優先
- Gradleプロジェクトは後まわし

## akir-iga

## h-yosiok

# 2021/10/01

## a-maejim
- 月曜日にスライド見てもらう．3限以降なら空いてるのでどこかで声かける

## a-fujimt
- テストの品質によってカテゴライズ
    - 主観が多少入っても良い
    - テストの品質が悪い場合はうまくいかない、良いとうまくいくとかあれば良い
- パッチは正しく動けば\ﾖｼ!/
    - 意味のない処理は考慮しない（変数の宣言など）

## s-ogino
- 中間報告では、実験がうまくいかず、方針が駄目だったらどうするかを述べる。
- まず複数の対象プロジェクトについて、自動でバグ修正コミットを特定してみて、利用するバグ修正コミットの割合を変更する。それでうまくいかなければ、バグ修正コミットをうまく特定しても無駄とわかる。

## k-kotou
- 研究目的
    - より多くのバグを修正できるようにする
    - エラーメッセージとテストの成否など
- テストの動作仕様というのはテストの期待値
- エラーメッセージが何を表しているのか不明
    - JUnitの出力？
- 内訳
    - 途中で例外が発生
    - 最後までテストを実行できるが期待値と異なる
    - 不明というのは上記のどちらに分類すべきか自分で判断できなかったもの
- 　調査の目的
    - 　テストの期待値と一致しないものを重点的に調べる
- 　テストの結果から得られる情報の候補
    - 　文字列，型など
- GPUについては後でURLを送って

## m-iriyam
- 良さそうなテストケースを使うとより欠陥現局の能力が伸びるという意味？
- JUnitの ignore　アノテーションをつけたらスクリプト作らんくてもいいのでは？
- D4Jの新しいプロジェクトならJUnit4でも動くからそこら辺を調査対象にしたらどう？
- 400くらいならすぐに終わると思う
    - やっぱりプロジェクト規模によりそう
- seed値を固定して多くのバグを検証した方がいいかも

## r-takaic
- このまま続けて良さそう
- 「テストケースとJavaコードのペアで学習」の結果が出て，かつ，ひご先生を見かけたら報告する（結果が気になるっていう話）

## shu-hsmt
- Map.Entryいらない
- 他のtreeMapも取ってくる
- 自分で判断が難しそうなら他の言語で試してみるのもあり
- まだ苦戦するなら結果が早く出る方がいいので他のツールを試す
- ディレクトリ以下の全てのJavaファイルの自動解析はすぐできるので調べる
- 1月までに論文発表できるような材料をそろえる

## akir-iga
- とりあえず方針を決めてから本格的に研究に動いた方がいい
    - その後にpraprとかやってもいいのでは？
    - ネタ -> 研究活動 
    - 中間報告もあるので早め早めに
- スライドをしっかり作っておいた方がいい
- 個別に話す時間を決める
    - 来週の月曜日夕方に声かけて
- ネタを考えているなら説明できるようにしてね

## h-yosiok

# 2021/09/24

## a-maejim
- リファクタリングの実験は全部動かさなくていい，動作確認できればいい
- 来週くらいに機能等価メソッドをもらう

## a-fujimt
- うまくいかないプロジェクトに関して，何か特徴が見つかると良い
- 直近：全部PASSする原因を探る
- 中間報告までに評価の方法を考える

## s-ogino
- データ正確化済みegitで実験して結果を報告。
- 機械的にバグ修正コミットを特定した場合の正しさは議論しないでおｋ？

## k-kotou
- 研究方針について相談
    - まずは既存研究では修正できない事例を見つける
    - その次に、上記事例を提案手法で解決できるか試してみる
- Javaで機械学習をできるライブラリについて、使用時に制約(有償, 必要なリソース等)がないか調査
- TODO: 楠本研究室の公式サイトに中国語のフォントが混じっているのでフォント統一
    - 更新後、移転したサーバでCIが稼働しているか確認して、結果をh-watanbに知らせる

## m-iriyam
- このまま続ける
- 欠陥限局を行うツールの導入(kGenProgなど)

## r-takaic
- データ増やして結果が悪かったら研究が詰むので早めに結果を出して見たい
    - 詰んだら相談

## shu-hsmt

## akir-iga

## h-yosiok
- kGenProgはjdk8では動かない
    - gitには動くバージョンもある
    - d4jの，jdk11以降で動くもののみを対象としても良いかも
- 中間報告会では研究背景を説明することが重要
    - 実際の方法<=研究背景
- jacoco(?)のAPIをいじれば実行経路の情報を得られるそう
    - 松本先生が担当されたそうで，わからないことがあれば松本先生に聞くのが良いかも

# 2021/09/17

## a-maejim
- このあと相談する
- APRツールがちゃんと動くかが大変そう
## a-fujimt
- 特になし

## s-ogino
- 手動でバグ修正コミットを特定する。
    - 信頼性は、特定結果を共有すれば担保可能
- そもそもszzがどの程度うまく特定できているかをしらべる。
- szzの特定精度と予測精度との相関を計測＋「高い場合はバグ予測可能」主張
- １ヶ月後に改善できなければ方向性を考え直す。

## k-kotou

## m-iriyam

## r-takaic
- 後日，松本先生も含めて実験に使っているコードをどうやって共有するか決める
- 問題文とソースコードとかで実験した結果を次か次の次のNTTMTGで話せたらいいな

## shu-hsmt
- 今の問題は時間をかけるところではない
  - 詰まっている場合はすぐに相談

## akir-iga

## h-yosiok
- PraPRの論文があるなら，著者にメールを送る．ないならGitHubのほうで送る
- ProFLと比較を行う


---
# 2021/07/30

## a-fujimt
- いくつかのバグを見て，分類
    - 上手くいきそうか早い段階で確認
- 英語論文は今日中に送る

## s-ogino
- 「入力する特徴量を増やしても精度が上がらない」という主張もあり。論文の方向性を考える。
- このあと、入力フォームへ入力する情報について質問させて頂く。

## k-kotou
- そもそもPhoenixを利用することができるのか？
    - これも質問に加える
- 予定を見て空いてたら同席します

## m-iriyam
- 新ネタについての相談を肥後先生の部屋にて行う
- SCAMのネタはSANERに投げる予定
    - 締め切りを確認しておいて
    - 英文校正の期限も考えて早めに

## r-takaic
- 研究室きてるタイミングで進捗について肥後先生から声かけるかも

## shu-hsmt
- ビルドできたら実行もできそう
- 3月あたりに発表できたらよい
    - 1月くらいに小規模な実験の結果がでているくらい

---
# 2021/07/16

## a-maejim
- そのうち次の研究の相談をする

## a-fujimt
- 来週頭どこかで相談
    - 多分月曜日

## k-kotou
- 堀田さんについては肥後先生の連絡待ち

## m-iriyam
- 探しても見つからないので全く新しいものにしてもいいかも？
    - 必要なら声かけて
- 直近では原稿修正頑張って！

## r-takaic
- スライド発表
- 出力の整形処理
    - どの程度時間がかかるかわからない
    - 先にこの作業をやる
- モデルを作るのはマシーンが来てから


## shu-hsmt
- 解決したいことの認識
    - mutableなものを使っているとまずいというのは何となくわかるけどどう悪いのかという裏付けを取ればいいのか
    - よく言われている定説を裏付けることがmotivationでは？

---
# 2021/07/09

## a-maejim
- とくになし

## a-fujimt
- 英文見直したらチェックしてもらう．どこかで

## s-ogino
- 発表練習は月曜日の午後
- 系列データ入力がメトリクス入力と比較してうまくいかない原因を調査するしかない…

## k-kotou
- G&V云々については本当にオーバーフィットが下がらないかもう少し調べたほうがいい
    - (higo)テスト数が少なくなるとSMT式が簡単になるからオーバーフィットを起こすのでは
- 意味論ベースと書いたほうがいい
- 報告レポートを見返す

## m-iriyam
- 新ネタについてはまだ思いついていない
- 原稿修正は8月頭なので、余裕をもってやる
- SANERを狙っていこう

## r-takaic

- GPUサーバーの利用を検討する

## shu-hsmt
- 先行研究の再調査はざっくり調べればよい（精読の必要なし）

<!-- ## akir-iga -->

<!-- ## h-yosiok -->


---
# 2021/07/02

## a-maejim
- ミーティング後にスライドの修正を相談

## a-fujimt
- 特になし

## s-ogino
- 木構造データ入力のライブラリを探す
- ライブラリの身元をはっきりさせる
- 論文誌の原稿の添削依頼
    - 1週間前にそれなりの出来のものか
    - 2週間前にダメダメなもの
    
## k-kotou
- 先行研究は研究のモチベーションとして使えそう
- 下の論文を読んでみたらいいかも
    - Angelix
    - Nopol
- 頑張れ会はのせない

## m-iriyam
- 査読コメントに関する相談を今日やる
- SCAMはオンラインだし、SANERでハワイ行ってもいいのでは？
    - 決めたら言ってね

## r-takaic
- 1つ目
    - perlのバージョン？
    - linuxでしか動かないかも
- 2つ目を優先する

## shu-hsmt
- バージョンを落としてやってみる

## akir-iga
- 進捗報告
    - ページ数を書く
    - どっちのネタをやりたいのか？
        - ない(どっちでもいい)
    - やりたいこと１：ツールのメタ的な処理内容(アルゴリズム)を抽出したいという意味かな？
    - やりたいこと２：言語特有のバグを対象とした調査をしたい
        - 言語の性質でなくバグの性質に大きく依存するのでは？(アイデアがすぐには出てこない)
- 次の一手は？
    - 思い浮かばない
    - 前回渡したネタは？
        - 学部でやるには現実的かと
    - 自分のやりたい研究に関して部分的にでも解決できる方法が欲しいかも
    - 何がわからないかわからないのが実情

## h-yosiok
- 院試がんばる


---
# 2021/06/25

## a-maejim
- SIGSSの発表は20分(15分なら質疑長め)
- 背景を省略して話すなら後半の実験結果の部分を長めに作って，時間調整する
- MDの論文は動画がyoutubeに上がってたので参考にする

## a-fujimt
- クラスタリングのモチベーションは自分で考えてみる
    - 詰まったら相談

## s-ogino
- スーパーメトリクスモデルのほうが良い結果が出るんじゃないか。
    - 試してみる
- 入山くんより先に伊賀君の調書やる
    - その後誰に投げるかは伊賀くん次第

## m-iriyam
- 新ネタ
    - ツールやりたいけどむずくね？
        - FLのFでなく修正すべき箇所を知らせてくれるイメージ？
        - ドキュメント
    - まだ時間あるので考えてください(必要であれば相談して)
- SCAM
    - 余裕があれば校正に投げるべき(英語の力がつく)
    - 一週間かかるので予定を吟味して決める
    - 後日肥後先生と分担に関して話して決める

## k-kotou
- 実装するのが難しくないなら修正できた例からMotivating exampleを探すのもあり
- 再利用ベースの手法ではないが存在しない文を挿入する手法はある
    - Motivationが不適切かも
    - 既存手法:Semantic 


## r-takaic
- 順調そうなのでこの調子で


## shu-hsmt
- マニュアル読みばできそう


## h-yosiok
- 院試対策のみしてて良い
- スライド発表
    - なぜその研究が必要なのかを含める．
    - 発表は5~10分程度


---

# 2021/06/18

## a-maejim
- 7/1 17:00-18:00発練

## a-fujimt
- クラスタリングやってみる
- 発練の日程で都合の良い日をいくつか連絡する

## s-ogino
- なぜ入力サイズを「1024」でバチッと切ってしまうのか。
    - 最大長にしてしまえばいいのでは？

## k-kotou
- (メモ)結論を先に言った方が理解してもらいやすい
- 生成パッチを既存APRの個体に含めて修正の成否を計測とは
    - GANで生成された生成パッチ
    - 実験の方法と目的が似ている項目として書かれているように見える
    - 日本語もわかりにくいから修正
    - GANは学習データの量が少なくても学習できるから、わざわざ"たくさん" = "学習が有効になる程度の"という補足は必要ない
    - 機械学習による生成モデルの作り方を補足すべき
    - 評価方法が正しいか
        - なぜミックスするのかわからない
        - kGPに組み込むというニュアンスがわからない
    - スライドを用意して個人ミーティング
        - (報告用スライドを作成してそれを一度見てもらってもいいかもしれない)
- APRに良い影響という日本が不適切
- 人が修正したパッチがたくさん必要なのは当たり前なので書かなくてよい
    - リーブワンアウト法
- 就活の面接(先生にご対応していただく案件でないことを明記)

## m-iriyam
- APIの名前が変わった時に開発者は何をすべき(付随して必要な処理)なのか
    - リリースノートの変更など
    - 変わった時に開発者がどんな作業をしていたのか確認してみたら？
    - こういう研究が必要という客観的なデータを揃えても良いかも(一意見)
- ネタの打ち合わせは、時間がある時にどうぞ

## r-takaic
- nalpのデータをコードに変えたときの出力結果は良さそう
- （や)が出力されないのは仕方ない
- 他のGANを使った翻訳の例も試してみたらまつ本先生も巻き込んでミーティングをする


## shu-hsmt
- 2列目のuseは冗長かも
- このあとミーティング


## h-yosiok
- 結論を先にいう.
- 7/2にスライド発表したらそれ以降のMTGには参加しなくてよい．


# 2021/06/11

## a-maejim
- CSセミナー(7/8ssと同じ or 7/15)の一週間前に発練をする

## a-fujimt
- 完全部分グラフになるやつが正しいpatchの集合ともとれそう
- 英文校正デフォルトで5営業日
    - お金積んで早くしても良い

## s-ogino
- 論文タイトルに「、」は入らない
- 1024ノードに収まるメソッドが全体の何％なのかをしらべる。
- 大きなメソッドにバグがあるのに、そのメソッドが対象にならないというのでは、問題がある。

## k-kotou
- 表のところがよくわからん
    - あとで修正する
    - 理解できているなら大丈夫
- 従来的な機械学習手法とは?
    - ニューラル機械翻訳
- 自然なプログラム修正とは？
    - 人間が直感的に理解できる修正
    - オーバーフィットは関係なく，見た目が人が修正したものに近い
- 従来の数理モデルとは？
- GANを使うことでどのようなメリットがあるの？
    - 人間が直感的に理解できる修正
    - 研究内容は？
        - GANと遺伝的アルゴリズムを利用したいとあるが、よくわからんからまとめて報告してほしい
- 纏まったら個別で

## m-iriyam
- 既存研究に比べてより深く探ることを目的とする
- 実験対象が少ないからよりシステマチックな手法で多くのプロジェクトに検証をしたい
    - どれだけサンプル数と時間をかけられるか？
- 既存研究の時点で97%ほどの精度ならこれを超えるのは難しいのでは？
    - 論文の最後にvalidationの検出漏れに関する記載があった
- 「機械学習を用いてもっとたくさんのプロジェクトに検出をかけてそれでも高精度を維持できるか」の方が良いのでは？

## r-takaic
- 学習に使ったデータを追加することはできそうか？
    - データの形式を調べてみる
    - コード補完になりそう
- 試せそうな機械翻訳の例を上から試していく
- MD輪講の論文の動画を肥後先生からもらえるかも

## shu-hsmt
- 解析対象のスクリプトではなくソースコード
    - あとで書き直しておく
    - 入力はプロジェクト全体のコード
- どのファイルの何行目で何の型なのかを出力できるように
- 解決できなさそうなら周りの人や先生に相談


## h-yosiok
- proFLの動作環境作成を手伝っていただく
- 毎週進捗が生まれていなければいけないということもない


---
# 2021/06/04

## a-fujimt
- テストのクラスタリングは現時点で不要
- テスト実行スクリプトの見直しが必要
    - テストの生成数が少ないのが原因かも
- CSセミナーはSSほとんどそのままで良い

## s-ogino
- tbt1でよい精度が出て、tbt12で悪い精度が出るのは、バグメソッドの特徴が変化しているからなのかを明らかにする。
    - tbt1で予測成功かつtbt12で予測失敗したファイルについて、いつのファイルを学習用にしたのかを明らかにする？
        - 12か月前のファイルを参照したのは明らかなのでそうする必要はないのでは？
- ファイルで管理するのではなく、データベースを使って管理するのもあり
- 

## k-kotou
- 従来手法の論文を載せとく
- 自分の研究に活かせるかどうかまだわからん
- わかったら教える
    - 個別MTGを開きたい

## m-iriyam
- 50%になっているのは一つ目のAPI名変更を検出できる機能が低いという意味
- API名の変更以外を検知できないことが問題と言いたかった
- コードでなくドキュメントの中を書き換えるという意味

## r-takaic
- 生成器について
    - NTTチャンネルでまつ本先生，肥後先生宛に個人ミーティングの日程調整を
    - 論文読み終わったら投げる
- MD輪講の題材
    - 識別器であげた論文が良さそうならそれで

## shu-hsmt
- 参照した変数がmutableかどうか
    - オブジェクトのクラス宣言を解析する機能がASTの解析とは別に必要
    - データの型を見てクラス宣言がmutableかを確認する
- argumentをどのようにして参照するか
    - このあと相談

## 調書
- 吉岡→古藤→藤本
- 伊賀→入山→荻野
- 肥後先生への提出は6/24まで

# 2021/05/28
## a-maejim
- 6/1にスライドの添削をお願いする

## a-fujimt
- バグ予測に履歴のトラッキングが重要でないのもそれはそれで一つの知見
    - もう少し分析してみる
- バグ予測以外のプロジェクトの適用も検討
    - 追々考える
- CSセミナーは最低コストでOK

## s-ogino
- メトリックのアイデア
    - そのコミッターが一個前にやったコミットから経った時間
    - 修正部分のメトリックについては、粒度をもっと細かくする
        - あるいはコメントを取り除く

## k-kotou
- 調査してわかったことを一行程度メモしておく
- 代表的な機械学習手法について調査しているのは何のため？
- MD輪講の題材を書いとく

## m-iriyam
- SESオツカレ
- SCAMまでは時間があるから少し休んでいい
- 引っ張ってきた論文を引用している論文を調べて被っていないかどうかを確認

## r-takaic
- 進まなくなったら声かける
- 今のところ大丈夫そう
- MD輪講の題材を決める

## shu-hsmt
- デバッグでブレイクポイントを使うとよい
- 休日は研究しなくていい
- いつでもインターン先の相談してもいい


## h-yosiok
- サーバ上のUbuntuの動かし方を学ぶ.
    - GUIはないらしい.
    - 荻野さんか前島さんに使い方を聞く.　　　　　　　　　　　　　

----

# 2021/05/21

## a-maejim
- 目視確認の擦り合わせを来週どこか

## a-fujimt
- Motivating exampleはこれで良さそう
- バグ予測実験はもう少し考察してみる
- 原稿の内容について，SIGSSは査読なしなので差分を考えなくても良い

## s-ogino
- 特になし

## k-kotou
- 研究目的は"修正コードの生成を自然な形で行うようにすること"
- 図について
    - 入力や出力は?
        - 入力はテストケースとバグのあるコード
        - 出力は修正パッチ
    - GANを利用
        - GANを使わない場合との違いを調べている途中

## m-iriyam
- ロードマップを作って来週報告
- SCAMのどこのトラックに投げるのか？
- 新ネタを決めた後の輪講にしたほうがいいかも(一週間前までにネタを決めたい)

## r-takaic

- CodeBERTを使った機械学習系の研究を調べる
    - いいのがあったらMD輪講はそれでいいんじゃない？

## shu-hsmt
- 荻野さんのコードを参考にJDTの学習を進める． 
- ツールに関することは早めに肥後先生に相談（悪いことも含め）．

## h-yosiok
- Can Automated Program Repair Refine Fault Localization? A Unified Debugging Approachを読み終える。
    - 読み終えたら肥後先生に報告し,個別MTGを開いていただく.　　　　　

## akir-iga
- 研究内容を決める
    - 輪講資料やpmanを見て興味あるものを探す
----
# 2021/05/14

## a-maejim
- ss岩手　
    - 一週間前に完成版を送る
    - 部分的に見て欲しかったらその都度
- MD輪講
    - CodeShovelのプレゼンの動画をもらう 

## a-fujimt
- SCAMのEngineeringの中にToolがある
    - Toolを実装・公開，実験結果がメイン
- SS論文は第一版5月末まで

## s-ogino
- CSセミナーとの兼ね合いを考慮する

## k-kotou
- 来週のどこかで先生と話し合いするのであらかじめ先生に連絡する

## m-iriyam
- 読むので早めに提出お願いします(できれば初回提出一週間前に)
    - 土日は動けないかもしれないので月曜あたりに出せばその日中に出す
- easychairを使ったことないならできるかどうかを試してできなかったら月曜に先輩or教員に連絡する
- MDネタを考える

## shu-hsmt
- 5月中にツールの作成を目指す
- MD輪講のネタは検索した論文の中から

## akir-iga
- Hello, world.
    - 空いている曜日をリストアップしてから都合の良い日を連絡して


## h-yosiok
- 次週の月曜日にネタに関しての話し合いを行う.

--- 

# 2021/05/07

## a-maejim
- 目視確認をお願いした
- ss岩手の論文を書ける章からかいていく

## a-fujimt
- バグ修正
    - 向上してはいるので出せる結果である
    - 他のプロジェクト・リリースも試す
- 英語論文
    - ASE NIERはアイデア重視
    - APSEC fullは実験結果重視

## s-ogino
- APSEC fullpaperがだめそうなら早めに連絡する。

## k-kotou
- 別のネタに行くのもあり
    - 進退に関して一度来週のどこかで先生にお声をかけて話し合う

## m-iriyam
- トップダウン
    - 1,2つ目がよかったけど、3つめが少し良くなかった？
    - 原稿を書くための実験を終えたので良い
    - 一通り書いたら送ってくれ

## r-takaic
- 金4あたりにネタの打ち合わせ

## shu-hsmt
- MD輪講かBM輪講の時に行くので、来たタイミングでネタの話し合いをする

## h-yosiok
- 金曜に個別でネタの話し合いをするので声かけてください

---

# 2021/04/23

## a-maejim
- 目視の合意ができるか早めに確認する
    - 今日中にはスプレッドシートを送ります． 
- ss岩手タイトルとアブスト締め切り(5/7)の前日くらいに確認してもらう

## a-fujimt
- グラフの色をなんとかする
- バグ予測について，そもそもRenameの数が既存手法と提案手法で異なっているのかを調査するべき

## s-ogino
- たとえ不完全でもAPSECのfullに投稿するつもりでやる。
    - 主な理由は、査読コメントを貰うため。
- このあと、僕のワークステーションにGPUを追加できるかを確認する。
    - 確認項目
        - スロット
        - 電源容量
- 検証候補については、まんべんなく網羅的に調べるしかない。設定が恣意的だと思われたら終わり。

## k-kotou
- 塩基情報が同一のものが多く含まれる
    - それを改善したい
    - どうやって実現するのか
        - 提案手法のスピードが遅い原因？
        - 直接は関係ないけれど制限時間内に
        - 週末は休憩していいよ

## m-iriyam
- 特にいうことはない
    - 頑張ってデバッグして
- SES(5/17)
    - 目視確認が1週間程度で終わったので、スケジュール的に余裕を持って進めれば大丈夫

---
# 2021/04/16

## s-ogino
- ERAに投稿するのはもったいないのでは？
    - 理由は、良い結果がでそうだから。
    - しかし、APSEC_Researchだと締切が厳しい。
    - 結論としては、実験回してみて、時間がどのくらいかかるか、結果は良さそうかを見てから考える。

## k-kotou
- 時間をかけても限局ができないのは実装上の問題の可能性が高いので、まずは原因を特定する
    - 原因については来週のミーティング(4/23)に報告
- あまり長い時間卒論の研究を引きずっていても生産性に欠けるので早めに

# 2021/04/15

## a-maejim
- 類似度の閾値はgitに揃えて50のままでいい．
- 目視の確認を手伝ってもらう．diffを見やすくして送る．
- 修論にネタを変えるのか引き続きやるか考えておく．

## a-fujimt
- 既存手法で閾値が低い時に結果がよくないことが言いたい
- 既存手法ではうまくいかないが提案手法でうまくいく（見つけられる）例が見つかると良い
- TODO: Jaro-winklerのオーダー調査，Levenshteinでも調べてみる
- TP,FP,FNの計算の話は後で
- 動かないプロジェクトはJavaのメモリ割り当てを見直す

## m-iriyam
- 来週には結果
- ツールが正しく動作するかテスト

---
# 2021/04/09

## a-maejim
- 原稿を岩手で出すのを目指す
- 改善が労力かけずにできるならやる．行数を考慮したら既存の結果が崩れないか気にする

## a-fujimt
- どこに原稿を出すか検討
    - 日本語論文：SIGSS, SES
- 最終的に前島さんの研究と合わせるのも良い

## s-ogino
- 先行研究として、以下の論文を読んでおく
    - Locating Faulty Methods with a Mixed RNN and Attention Model
- 一般的な論文紙に提出する場合、査読期間が長い。修士課程で対応するなら、早めに提出する。
- 一方で、特集号と呼ばれる論文紙もあり、それは査読期間が短い。そっちに投げるのもあり。
- 結論として、新ネタと並行して論文紙の方の実験にも取り組んでみる。論文紙の方は8月の特集号に投げることにする。

## k-kotou
- 他のバグに対して実験するための実装を行なっている
    - 今抱えている問題はいくつか解決しそう
- 個別ミーティングの時間はいつ？
    - 決まったら連絡するように

## m-iriyam
- RMinerに関して互換性を保つための研究はできそう？
    - 判定自体が簡単ならやってもいい
    - 英語で書くならサクッとやった方がいい

- SESは5月が締め切りなので頑張って
- APSECは絶対
