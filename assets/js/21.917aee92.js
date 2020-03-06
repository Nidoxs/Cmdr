(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{260:function(e,t,s){"use strict";s.r(t);var n=s(28),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[e._v("#")]),e._v(" Hooks")]),e._v(" "),s("p",[e._v("Hooks are callback functions that you can register which "),s("em",[e._v("hook")]),e._v(" into the command execution process. Hooks are extremely useful: they can be used for implementing a custom permission system, logging commands, or overriding command output.")]),e._v(" "),s("p",[e._v("Hooks can be registered on both the server and the client. Server commands will run server hooks, and client commands (such as "),s("code",[e._v("blink")]),e._v(") will run client hooks. Depending on your application, you may need to register hooks on one or both. For example, logging may only need to be registered on the server, but permissions might need to be registered on the client in addition to the server.")]),e._v(" "),s("p",[e._v("There can be many hooks of each type, and they are all run until one returns a string, which will replace the command response in the console.")]),e._v(" "),s("h2",{attrs:{id:"beforerun"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforerun"}},[e._v("#")]),e._v(" BeforeRun")]),e._v(" "),s("p",[e._v("The callback is passed the CommandContext for the relevant command. The hooks are the last thing to run before the command itself, so all properties are available.")]),e._v(" "),s("p",[e._v("This hook can be used to interrupt command execution (useful for permissions) by returning a string. The returned string will replace the command output on the executing user's screen. If the callback returns nothing ("),s("code",[e._v("nil")]),e._v("), then the command will run normally.")]),e._v(" "),s("p",[e._v("As a quick way to register hooks on both the server and the client, you can make a folder for your hooks, with module scripts in them which return a function. Similar to Types, if you call "),s("code",[e._v("Cmdr:RegisterHooksIn(yourFolderHere)")]),e._v(" from the server, Cmdr will load all ModuleScripts in the folder on the server and the client, so you only need to write your code once.")]),e._v(" "),s("div",{staticClass:"language-lua line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-lua"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-- A ModuleScript inside your hooks folder.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\tregistry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("RegisterHook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"BeforeRun"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Group "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"DefaultAdmin"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("and")]),e._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Executor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("UserId "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("~=")]),e._v(" game"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("CreatorId "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("then")]),e._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"You don\'t have permission to run this command"')]),e._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("h2",{attrs:{id:"afterrun"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#afterrun"}},[e._v("#")]),e._v(" AfterRun")]),e._v(" "),s("p",[e._v("The AfterRun hook runs, as its name implies, directly after a command is run. The callback is also passed a CommandContext, but the "),s("code",[e._v("Response")]),e._v(" property is now available, which is the response from the command implementation (what would normally be displayed after running the command).")]),e._v(" "),s("p",[e._v("If this callback returns a string, then it will replace the normal response on the user's screen. If the callback returns nothing ("),s("code",[e._v("nil")]),e._v("), then the response will be shown normally.")]),e._v(" "),s("p",[e._v("This hook is most useful for logging. Since we don't want to add this hook on the client in this example, we can just require the server version of Cmdr and add this hook directly right here (as opposed to what we did in the BeforeRun example, which adds the hook to the client as well):")]),e._v(" "),s("div",{staticClass:"language-lua line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-lua"}},[s("code",[e._v("Cmdr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("RegisterHook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"AfterRun"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-- see the actual response from the command execution")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Returning a string from this hook replaces the response message with this text"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);