import {html} from "../../node_modules/lit-html/lit-html.js";


export let rowData = (row) => html `
<tr>
<th>${row.name}</th>
<th>${row.email}</th>
<th>${row.course}</th>
</tr>
`

export let allRows = (rows) => html `${rows.map(r => rowData(r)) }`