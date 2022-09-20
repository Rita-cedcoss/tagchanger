$(document).ready(function(){
   
    $("#btnchange").click(function(){
         change();
        $('#btnchange').prop('disabled', true);
    })
    
})
function change()
{
    $("h1:not(.bingo)").replaceWith($('<h2>' + "Heading 2" + '</h2>'));
    $("h1").each(function() {
        arrObj=[];
        $.each(this.attributes,function(i,a){
            obj={id:i+1,name:a.name,value:a.value}
            arrObj.push(obj);
          })
          for(i=0;i<arrObj.length;i++){
            console.log("name=",arrObj[i].name)
          $("#dischange").append("<p>"+arrObj[i].id+"."+arrObj[i].name+":"+arrObj[i].value+"</p>")
          }
          $('#btnchange').prop('disabled', true);
    })
console.log($arrAttributes)
}