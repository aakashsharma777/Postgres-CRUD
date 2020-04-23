const con= require('../../pg_connection');

module.exports.register=(request,response)=>{
    var sql="select * from empd";
    con.query(sql,(err,result)=>{
      if(err) throw err;
      else
      console.log(result.rows)
      response.json(result)
    })

}

module.exports.insertempd=(request,response)=>{
    var eid=request.body.eid;
    var name=request.body.name;
    console.log(eid,name)
    var sql=`insert into empd(eid, name) values('${eid}','${name}')`;
con.query(sql,(err,result)=>{
if(err) throw err;
else
console.log(result)
response.json({'msg':'Data Inserted Successfully'});
})

}

module.exports.updateempd=(request,response)=>{
    var eid=request.body.eid;
    var name=request.body.name;
    var sql=`update empd set name='${name}' where eid='${eid}'`;
    con.query(sql,(err,result)=>{
        if(err) throw err;
        else
        console.log(result)
        response.json({'msg':'Data Inserted Successfully'});
        })

}


module.exports.deleteempd=(request,response)=>{
    var designation=request.body.designation;
    var sql=`delete from salaryd where designation='${designation}'`;
    con.query(sql,(err,result)=>{
        if(err) throw err;
        else
        console.log(result)
        response.json({'msg':'Data Deleted Successfully'});
        })
}

module.exports.insertsalaryd=(request,response)=>{
    var eid=request.body.eid;
    var salary=request.body.salary;
    var designation=request.body.designation;
    var sql=`insert into salaryd(eid, salary, designation) values('${eid}','${salary}','${designation}')`;
    con.query(sql,(err,result)=>{
        if(err) 
        //console.log(result)
        response.json({'msg':'Invalid Input'})
        else
        response.json({'msg':'Data Inserted Successfully'})
    })

}

module.exports.crossjoin1=(request,response)=>{
    var sql=`select * from empd cross join salaryd`;
    con.query(sql,(err,result)=>{
        if (err)
        response.json({'msg':'Error'})
        else
        console.log(result)
        response.json({'msg':result})

    })
}

module.exports.innerjoin1=(request,response)=>{
    var sql=`select empd.name, salaryd.salary from empd inner join salaryd on empd.eid = salaryd.eid`;
    con.query(sql,(err,result)=>{
        if (err) throw err
        else
        console.log(result)
        response.json({'msg':result})

    })
}

module.exports.equijoin1=(request,response)=>{
    var sql=`select * from empd join salaryd on empd.eid=salaryd.eid`;
    con.query(sql,(err,result)=>{
        if (err) throw err
        else
        console.log(result)
        response.json({'msg':result})

    })
}

module.exports.leftouter=(request,response)=>{
    var sql=`select empd.name, salaryd.salary from empd left join salaryd on empd.eid=salaryd.eid`;
    con.query(sql,(err,result)=>{
        if (err) throw err
        else
        console.log(result)
        response.json({'msg':result})
    })
}




module.exports.fullouter=(request,response)=>{
    var sql=`select empd.name, salaryd.salary from empd full outer join salaryd on empd.eid=salaryd.eid`;
    con.query(sql,(err,result)=>{
        if (err) throw err
        else
        console.log(result)
        response.json({'msg':result})
    })
}