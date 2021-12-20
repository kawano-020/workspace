(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{602:function(t,e,l){"use strict";l.r(e);var n=l(29),d=Object(n.b)({setup:function(){return{dbDoc:Object(n.a)((function(){return'<section><h1>DB Shema</h1>\n<h2>テーブル一覧</h2>\n<table>\n<thead>\n<tr>\n<th style="text-align:left">テーブル名</th>\n<th style="text-align:left">概要</th>\n<th style="text-align:left">備考</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:left"><code>user</code></td>\n<td style="text-align:left">ユーザー</td>\n<td style="text-align:left"></td>\n</tr>\n<tr>\n<td style="text-align:left"><code>follow</code></td>\n<td style="text-align:left"><code>user</code>に対してのフォロー</td>\n<td style="text-align:left">中間テーブル</td>\n</tr>\n<tr>\n<td style="text-align:left"><code>content</code></td>\n<td style="text-align:left">ユーザーの呟き</td>\n<td style="text-align:left"></td>\n</tr>\n<tr>\n<td style="text-align:left"><code>category</code></td>\n<td style="text-align:left"><code>content</code>のカテゴリー</td>\n<td style="text-align:left">マスターテーブル</td>\n</tr>\n<tr>\n<td style="text-align:left"><code>reply</code></td>\n<td style="text-align:left"><code>content</code>に対しての返信</td>\n<td style="text-align:left">中間テーブル</td>\n</tr>\n<tr>\n<td style="text-align:left"><code>good</code></td>\n<td style="text-align:left"><code>content</code>に対してのいいね</td>\n<td style="text-align:left">中間テーブル</td>\n</tr>\n<tr>\n<td style="text-align:left"><code>user_log</code></td>\n<td style="text-align:left"><code>user</code>の作成・変更やフォローに関するログ</td>\n<td style="text-align:left">トランテーブル</td>\n</tr>\n<tr>\n<td style="text-align:left"><code>content_log</code></td>\n<td style="text-align:left"><code>content</code>に対しての返信やいいねに関するログ</td>\n<td style="text-align:left">トランテーブル</td>\n</tr>\n</tbody>\n</table>\n<hr>\n<h2>特記カラム属性</h2>\n<ul>\n<li>PK : PrimaryKey</li>\n<li>FK : ForeignKey</li>\n<li>UQ : Uniqe</li>\n<li>NN : Not Null</li>\n<li>AI : Auto Increment</li>\n<li>UN : Unsigned</li>\n</ul>\n<p>※ ForeignKey制約には基本的にCASCADEを付与する</p>\n<hr>\n<h2><code>user</code></h2>\n<table>\n<thead>\n<tr>\n<th style="text-align:left">カラム名</th>\n<th style="text-align:left">データ型</th>\n<th style="text-align:left">PK</th>\n<th style="text-align:left">FK</th>\n<th style="text-align:left">UQ</th>\n<th style="text-align:left">NN</th>\n<th style="text-align:left">AI</th>\n<th style="text-align:left">UN</th>\n<th style="text-align:left">Default</th>\n<th style="text-align:left">備考</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:left"><code>id</code></td>\n<td style="text-align:left">VARCHAR(255)</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">-</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">-</td>\n<td style="text-align:left">-</td>\n<td style="text-align:left">-</td>\n<td style="text-align:left">UUID</td>\n</tr>\n</tbody>\n</table>\n<hr>\n<h2><code>follow</code></h2>\n<table>\n<thead>\n<tr>\n<th style="text-align:left">カラム名</th>\n<th style="text-align:left">データ型</th>\n<th style="text-align:left">PK</th>\n<th style="text-align:left">FK</th>\n<th style="text-align:left">UQ</th>\n<th style="text-align:left">NN</th>\n<th style="text-align:left">AI</th>\n<th style="text-align:left">UN</th>\n<th style="text-align:left">Default</th>\n<th style="text-align:left">備考</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:left"><code>id</code></td>\n<td style="text-align:left">INT</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">-</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">-</td>\n<td style="text-align:left"></td>\n</tr>\n</tbody>\n</table>\n<hr>\n<h2><code>content</code></h2>\n<table>\n<thead>\n<tr>\n<th style="text-align:left">カラム名</th>\n<th style="text-align:left">データ型</th>\n<th style="text-align:left">PK</th>\n<th style="text-align:left">FK</th>\n<th style="text-align:left">UQ</th>\n<th style="text-align:left">NN</th>\n<th style="text-align:left">AI</th>\n<th style="text-align:left">UN</th>\n<th style="text-align:left">Default</th>\n<th style="text-align:left">備考</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:left"><code>id</code></td>\n<td style="text-align:left">VARCHAR(255)</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">-</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">-</td>\n<td style="text-align:left">-</td>\n<td style="text-align:left">-</td>\n<td style="text-align:left">UUID</td>\n</tr>\n</tbody>\n</table>\n<hr>\n<h2><code>category</code></h2>\n<table>\n<thead>\n<tr>\n<th style="text-align:left">カラム名</th>\n<th style="text-align:left">データ型</th>\n<th style="text-align:left">PK</th>\n<th style="text-align:left">FK</th>\n<th style="text-align:left">UQ</th>\n<th style="text-align:left">NN</th>\n<th style="text-align:left">AI</th>\n<th style="text-align:left">UN</th>\n<th style="text-align:left">Default</th>\n<th style="text-align:left">備考</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:left"><code>id</code></td>\n<td style="text-align:left">INT</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">-</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">-</td>\n<td style="text-align:left"></td>\n</tr>\n</tbody>\n</table>\n<hr>\n<h2><code>reply</code></h2>\n<table>\n<thead>\n<tr>\n<th style="text-align:left">カラム名</th>\n<th style="text-align:left">データ型</th>\n<th style="text-align:left">PK</th>\n<th style="text-align:left">FK</th>\n<th style="text-align:left">UQ</th>\n<th style="text-align:left">NN</th>\n<th style="text-align:left">AI</th>\n<th style="text-align:left">UN</th>\n<th style="text-align:left">Default</th>\n<th style="text-align:left">備考</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:left"><code>id</code></td>\n<td style="text-align:left">INT</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">-</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">-</td>\n<td style="text-align:left"></td>\n</tr>\n</tbody>\n</table>\n<hr>\n<h2><code>good</code></h2>\n<table>\n<thead>\n<tr>\n<th style="text-align:left">カラム名</th>\n<th style="text-align:left">データ型</th>\n<th style="text-align:left">PK</th>\n<th style="text-align:left">FK</th>\n<th style="text-align:left">UQ</th>\n<th style="text-align:left">NN</th>\n<th style="text-align:left">AI</th>\n<th style="text-align:left">UN</th>\n<th style="text-align:left">Default</th>\n<th style="text-align:left">備考</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:left"><code>id</code></td>\n<td style="text-align:left">INT</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">-</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">-</td>\n<td style="text-align:left"></td>\n</tr>\n</tbody>\n</table>\n<hr>\n<h2><code>user_log</code></h2>\n<table>\n<thead>\n<tr>\n<th style="text-align:left">カラム名</th>\n<th style="text-align:left">データ型</th>\n<th style="text-align:left">PK</th>\n<th style="text-align:left">FK</th>\n<th style="text-align:left">UQ</th>\n<th style="text-align:left">NN</th>\n<th style="text-align:left">AI</th>\n<th style="text-align:left">UN</th>\n<th style="text-align:left">Default</th>\n<th style="text-align:left">備考</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:left"><code>id</code></td>\n<td style="text-align:left">INT</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">-</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">-</td>\n<td style="text-align:left"></td>\n</tr>\n</tbody>\n</table>\n<hr>\n<h2><code>content_log</code></h2>\n<table>\n<thead>\n<tr>\n<th style="text-align:left">カラム名</th>\n<th style="text-align:left">データ型</th>\n<th style="text-align:left">PK</th>\n<th style="text-align:left">FK</th>\n<th style="text-align:left">UQ</th>\n<th style="text-align:left">NN</th>\n<th style="text-align:left">AI</th>\n<th style="text-align:left">UN</th>\n<th style="text-align:left">Default</th>\n<th style="text-align:left">備考</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:left"><code>id</code></td>\n<td style="text-align:left">INT</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">-</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">√</td>\n<td style="text-align:left">-</td>\n<td style="text-align:left"></td>\n</tr>\n</tbody>\n</table>\n</section>\n'}))}}}),h=l(72),y=l(82),f=l.n(y),x=l(79),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-sheet",{staticClass:"db-document pa-4 mx-4",attrs:{elevation:3},domProps:{innerHTML:t._s(t.dbDoc)}})}),[],!1,null,null,null);e.default=component.exports;f()(component,{VSheet:x.a})}}]);