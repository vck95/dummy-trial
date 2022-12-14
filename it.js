var data = [{
    "Sl no":1,
    "Document Name":"insurance",
    "Date of Creation":"1st jan 2022",
    "Created By":"Shreya",
    "Last Modified":"31-dec-2022",
    "Modified By":"Anagha",
    "Action": " ",
},
];


$(document).ready(function() {
  var dataTable = $('#filtertable').DataTable({

    dom: 'Bfrtip',
      buttons: [
          {
              text: 'My button',
              action: function ( e, dt, node, config ) {
                  alert( 'Button activated' );
              }
          }
      ],

      "pageLength":5,
               "destroy": true, // In order to reinitialize the datatable
    "pagination": true, // For Pagination
    "sorting": true, // For sorting
    "aaData": data,

      'aoColumnDefs':[{
          'bSortable':false,
          'aTargets':['nosort'],
  }],
      scrollY:        "250px",
      scrollX:        true,
      scrollCollapse: false,
      paging:        true,
      fixedColumns:   {
          heightMatch: "300px"
      },

      
  
      "aoColumns":[
          // null,
          // null,
          // null,
          // null,
          // null,
          // null,
          // null
          {
              data:"Sl no"
          },
          {
              data:"Document Name"
          },
          {
              data:"Date of Creation"
          },
          {
              data:"Created By"
          },
          {
              data:"Last Modified"
          },
          {
              data:"Modified By"
          },
          {
              data:"Action"
          }


      ],
      

      "order":false,
      "bLengthChange":false,
      "dom":'<"top">ct<"top"p><"clear">'
  });
  $("#filterbox").keyup(function(){
      dataTable.search(this.value).draw();
  });
  
} );


