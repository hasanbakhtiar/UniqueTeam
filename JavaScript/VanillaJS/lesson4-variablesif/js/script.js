// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərflərə həssasdır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield




// let      -> local
// const    -> local    ->      constant 
// var      -> global   ->      variable

// global
// if (true) {
//     // local global
//     if (true) {
//         // local global
//         const a = 5;
//         if (true) {
//             // local
//         }
//     }
//     console.log(a);
// }


// ES12
// ECMAScript 
// ES6 

// if - > eger
// else if - > deyilse eger
// else - > deyilse

// var a = 5;
// if (a ==10) {
//     console.log('a in 10');
// }else if(a<=5){
//     console.log('a in 5');
// }else{
//     console.log('something wrong...');
// }

const time = 15;


if (time>5 && time <=10) {
    console.log('good morning');
    if (time == 7) {
        console.log('get up');
    }else if(time == 10){
console.log('have a breakfast');
    }else{
        console.log('continue progress');
    }
}else if(time > 11 && time <=17){
    console.log('good afternoon');
}else if(time > 18 && time <21){
    console.log('good evening');
}else if(time >= 21 && time <23){
    console.log('good night');
}else{
    console.log('no time');
}