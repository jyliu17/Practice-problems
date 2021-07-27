
class Engineer {
    constructor(name, favLanguage, number  ) {
      this.name = name,
      this.favLanguage = favLanguage,
      this.number = number;
        
    }
}

const engineers = new Map();

engineers.set('Greg', new Engineer("Greg", "Javascript", "010-101-0011"))
engineers.set('Jesse', new Engineer("Jesse", "Swift", "101-010-1100"))
engineers.set('Viral', new Engineer("Viral", "Python", "111-000-1110"))
engineers.set('Johnson', new Engineer("Johnson", "Javascript", "000-111-0001"))


document.write("<br> Each engineer's favorite language")
engineers.forEach(engineer => {
    document.write('<br><br>' + engineer.name + "'s favorite language is " + engineer.favLanguage + 
                    " and is reachable at " + engineer.number)
})


document.write("<br><br>" + engineers.get('Johnson').number )

document.write("<br><br>" + engineers.size)
