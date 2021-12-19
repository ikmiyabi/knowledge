"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[6540],{6500:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-b9193bf0",path:"/middleware/git/gitlog%E3%81%84%E3%82%8D%E3%81%84%E3%82%8D.html",title:"git logいろいろ",lang:"ja",frontmatter:{},excerpt:"",headers:[],filePathRelative:"middleware/git/gitlogいろいろ.md",git:{updatedTime:1639532968e3}}},6117:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});const e=(0,a(6252).uE)('<h1 id="git-logいろいろ" tabindex="-1"><a class="header-anchor" href="#git-logいろいろ" aria-hidden="true">#</a> git logいろいろ</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># グラフ化して表示する</span>\n<span class="token function">git</span> log --graph\n\n<span class="token comment"># 修正ファイルも表示</span>\n<span class="token function">git</span> log --stat\n\n<span class="token comment"># 各コミットの差分を表示</span>\n\n<span class="token function">git</span> log -p\n\n<span class="token comment"># エイリアスの設定</span>\n<span class="token function">git</span> config --global alias.lg <span class="token string">&quot;log --graph --decorate&quot;</span>\n\n<span class="token comment"># git logを短く見やすく表示</span>\n<span class="token function">git</span> log -50 --date<span class="token operator">=</span>short --pretty<span class="token operator">=</span><span class="token string">&quot;format:%C(YELLOW)%h %C(GREEN)%cd %C(CYAN)%an%C(RED)%d %C(reset)%s&quot;</span>\n<span class="token comment"># 実際はaliasに設定して使用する</span>\n<span class="token function">git</span> config --global alias.lg <span class="token string">&#39;log -50 --date=short --pretty=&quot;format:%C(YELLOW)%h %C(GREEN)%cd %C(CYAN)%an%C(RED)%d %C(reset)%s&quot;&#39;</span>\n<span class="token comment"># gitを打つのもめんどくさい人はこちら</span>\n<span class="token builtin class-name">alias</span> <span class="token assign-left variable">lg</span><span class="token operator">=</span><span class="token string">&#39;git log -50 --date=short --pretty=&quot;format:%C(YELLOW)%h %C(GREEN)%cd %C(CYAN)%an%C(RED)%d %C(reset)%s&quot;&#39;</span>\n\n<span class="token comment">#リモート追跡ブランチを最新の状態にする</span>\n<span class="token function">git</span> fetch\n\n<span class="token comment">#指定のブランチに移動する</span>\n<span class="token function">git</span> checkout master\n\n<span class="token comment">#リモートブランチ一覧表示</span>\n<span class="token function">git</span> branch -r\n\n<span class="token comment"># ローカルブランチとリモートブランチ対応一覧表示</span>\n<span class="token function">git</span> branch -vvv\n\n<span class="token comment"># リモートの内容を表示</span>\n<span class="token function">git</span> remote -v\n\n<span class="token comment"># masterブランチを最新にする</span>\n<span class="token function">git</span> pull origin master\n\n<span class="token comment"># ブランチを作成する</span>\n<span class="token function">git</span> branch develop/2018**** origin/master\n\n<span class="token comment"># カレントブランチ切り替える</span>\n<span class="token function">git</span> checkout develop/2018****\n\n<span class="token comment"># ブランチを作成して切り替える</span>\n<span class="token function">git</span> branch -b develop/2018**** origin/master\n\n<span class="token comment"># 空のコミットを打ち、git上に履歴を残す</span>\n<span class="token comment"># -mでコメントをつけて空コミットする</span>\n<span class="token function">git</span> commit --allow-empty -m <span class="token string">&quot;Start develop/2018****&quot;</span>\n\n<span class="token function">git</span> log\n\n<span class="token function">git</span> push origin develop/2018****\n\n<span class="token comment"># リモート追跡ブランチを更新する</span>\n<span class="token function">git</span> fetch -p\n<span class="token comment"># ブランチ確認</span>\n<span class="token function">git</span> branch\n<span class="token comment">#ブランチ作成</span>\n<span class="token function">git</span> branch feature/DEV-1160-**** origin/develop/20170222\n<span class="token comment">#ブランチの切り替え</span>\n<span class="token function">git</span> checkout feature/DEV-1160-****\n<span class="token comment">#ブランチが作成されたことを確認（-vvvで詳細を表示）</span>\n<span class="token function">git</span> branch -vvv\n\n<span class="token comment">#ブランチの状態確認</span>\n<span class="token function">git</span> status\n<span class="token comment"># 差分確認（add前の差分確認）</span>\n<span class="token function">git</span> <span class="token function">diff</span>\n<span class="token comment">#修正したファイルをインデックスに追加</span>\n<span class="token function">git</span> <span class="token function">add</span> ファイル名\n\n<span class="token comment"># ファイルの追加・変更履歴を残すファイルを確定する</span>\n<span class="token comment">#変更点を確認</span>\n<span class="token function">git</span> status\n<span class="token comment">#差分確認（add後の差分確認）</span>\n<span class="token function">git</span> <span class="token function">diff</span> --cached\n<span class="token comment">#コミットする（コミット前に確認！）</span>\n<span class="token function">git</span> commit\n\n<span class="token comment">#ブランチの状態確認</span>\n<span class="token function">git</span> status\n<span class="token comment">#ログの確認</span>\n<span class="token function">git</span> log\n<span class="token comment">#直前のコミットの差分確認</span>\n<span class="token function">git</span> show\n<span class="token comment">#特定のコミットの差分確認</span>\n<span class="token function">git</span> show <span class="token punctuation">[</span>ハッシュ値<span class="token punctuation">]</span>\n\n<span class="token comment"># ローカルのmasterブランチを更新する</span>\n<span class="token function">git</span> fetch origin\n<span class="token function">git</span> checkout master\n<span class="token function">git</span> pull origin master\n\n<span class="token comment"># ローカルのdevelopブランチを更新する</span>\n<span class="token function">git</span> checkout develop/20170330\n<span class="token function">git</span> pull origin develop/20170330\n\n<span class="token comment"># ローカルでdevelopブランチからmasterブランチへとマージする（変更を反映させる）</span>\n<span class="token function">git</span> merge --no-ff master\n\n<span class="token comment"># ビルドできるか確認</span>\nbundle <span class="token builtin class-name">exec</span> rake gradle:clean-build\n\n<span class="token comment"># ログを確認してプッシュする（リモートブランチへと反映させる）</span>\n<span class="token function">git</span> log -5\n<span class="token function">git</span> push origin develop/20170330\n\n<span class="token comment"># 困った時のgit stash</span>\n<span class="token function">git</span> stash <span class="token punctuation">(</span>save<span class="token punctuation">)</span>         <span class="token comment">#差分を一時退避させる</span>\n<span class="token function">git</span> stash list        <span class="token comment">#一時退避させた差分の一覧を見る</span>\n<span class="token function">git</span> stash pop <span class="token punctuation">[</span>number<span class="token punctuation">]</span>        <span class="token comment">#一時退避させた差分を元に戻す</span>\n\n<span class="token comment"># git blameで犯人探し</span>\n<span class="token function">git</span> blame <span class="token punctuation">[</span>ファイル名<span class="token punctuation">]</span>        <span class="token comment">#各行を修正した人物がわかる</span>\n\n<span class="token comment"># ブランチの削除（名前を間違えて作成した時など）</span>\n<span class="token function">git</span> branch -d <span class="token punctuation">[</span>ブランチ名<span class="token punctuation">]</span>\n\n<span class="token comment"># ブランチの強制削除（マージ済みでないブランチも削除）</span>\n<span class="token function">git</span> branch -D <span class="token punctuation">[</span>ブランチ名<span class="token punctuation">]</span>\n\n<span class="token comment"># gitの設定</span>\n<span class="token function">git</span> config --global user.name <span class="token string">&quot;John Doe&quot;</span>\n<span class="token function">git</span> config --global user.email johndoe@example.com\n\n<span class="token comment"># 色の設定</span>\n<span class="token function">git</span> config --global color.diff auto\n<span class="token function">git</span> config --global color.status auto\n<span class="token function">git</span> config --global color.branch auto\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br></div></div>',2),p={},l=(0,a(3744).Z)(p,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);