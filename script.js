// ! VARIABLES ! \\

const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");


// ! OPTIONS FOR BUTTONS ! \\
let options = {
  fruits: [
    "Apple",
    "Apricot",
    "Avocado",
    "Banana",
    "Bilberry",
    "Blackberry",
    "Blackcurrant",
    "Blueberry",
    "Boysenberry",
    "Currant",
    "Cherry",
    "Cherimoya",
    "Cloudberry",
    "Coconut",
    "Cranberry",
    "Custard apple",
    "Damson",
    "Date",
    "Dragonfruit",
    "Durian",
    "Elderberry",
    "Feijoa",
    "Fig",
    "Goji berry",
    "Gooseberry",
    "Grape",
    "Raisin",
    "Grapefruit",
    "Guava"
  ]
  ,

  animals: ["Hedgehog", 
  "Rhinoceros",
  "Squirrel",
  "Panther",
  "Walrus",
  "Zebra",
  "Bear",
  "Camel",
  "Rabbit",
  "Donkey",
  "Zebra",
  "Dog",
  "Squirrel",
  "Fox",
  "Pig",
  "Cheetah",
  "Goat",
  "Elephant"],
 
  countries: [
    'Afghanistan', 
    'Åland Islands', 
    'Albania', 
    'Algeria', 
    'American Samoa', 
    'AndorrA', 
    'Angola', 
     'Anguilla', 
     'Antarctica', 
    'Antigua and Barbuda', 
     'Argentina', 
     'Armenia', 
     'Aruba', 
     'Australia', 
     'Austria', 
     'Azerbaijan', 
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana', 
    'Bouvet Island',
    'Brazil', 
    'British Indian Ocean Territory', 
    'BruneiDarussalam', 
    'Bulgaria', 
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde', 
    'Cayman Islands', 
    'Central African Republic', 
    'Chad', 
    'Chile', 
    'China', 
    'Christmas Island', 
    'Cocos (Keeling) Islands',
    'Colombia', 
    'Comoros', 
    'Congo', 
    'Congo, The Democratic Republic of the',
    'Cook Islands', 
    'Costa Rica', 
    'Cote D\'Ivoire', 
    'Croatia', 
    'Cuba', 
    'Cyprus', 
    'Czech Republic', 
    'Denmark', 
    'Djibouti', 
    'Dominica', 
    'Dominican Republic', 
    'Ecuador', 
    'Egypt', 
    'El Salvador', 
    'Equatorial Guinea', 
    'Eritrea', 
    'Estonia', 
    'Ethiopia', 
    'Falkland Islands (Malvinas)', 
    'Faroe Islands',
    'Fiji', 
    'Finland', 
    'France', 
    'French Guiana', 
    'French Polynesia', 
    'French Southern Territories', 
    'Gabon',
    'Gambia', 
    'Georgia', 
    'Germany', 
    'Ghana', 
    'Gibraltar', 
    'Greece', 
    'Greenland', 
    'Grenada', 
    'Guadeloupe', 
    'Guam', 
    'Guatemala', 
    'Guernsey', 
    'Guinea', 
    'Guinea-Bissau', 
    'Guyana', 
    'Haiti', 
    'Heard Island and Mcdonald Islands', 
    'Holy See (Vatican City State)', 
    'Honduras', 
    'Hong Kong', 
    'Hungary', 
    'Iceland', 
    'India', 
    'Indonesia', 
    'Iran, Islamic Republic Of', 
    'Iraq', 
    'Ireland', 
    'Isle of Man', 
    'Israel', 
    'Italy', 
    'Jamaica', 
    'Japan', 
    'Jersey', 
    'Jordan', 
    'Kazakhstan', 
    'Kenya', 
    'Kiribati',
    'Korea, Democratic People\'S Republic of',  
    'Korea, Republic of',  
    'Kuwait',  
    'Kyrgyzstan',  
    'Lao People\'S Democratic Republic',  
    'Latvia',  
    'Lebanon',  
    'Lesotho', 
    'Liberia', 
    'Libyan Arab Jamahiriya', 
    'Liechtenstein', 
    'Lithuania', 
    'Luxembourg', 
    'Macao', 
    'Macedonia, The Former Yugoslav Republic of', 
    'Madagascar', 
    'Malawi', 
    'Malaysia', 
    'Maldives', 
    'Mali', 
    'Malta', 
    'Marshall Islands', 
    'Martinique', 
    'Mauritania', 
    'Mauritius', 
    'Mayotte', 
    'Mexico',
    'Micronesia, Federate', 
    'Moldova, Republic of', 
    'Monaco', 
    'Mongolia', 
    'Montserrat', 
    'Morocco', 
    'Mozambique', 
    'Myanmar', 
    'Namibia', 
    'Nauru', 
    'Nepal', 
    'Netherlands', 
    'Netherlands Antilles', 
    'New Caledonia', 
    'New Zealand', 
    'Nicaragua', 
    'Niger', 
    'Nigeria', 
    'Niue', 
    'Norfolk Island', 
    'Northern Mariana Islands',
    'Norway',
    'Oman', 
    'Pakistan', 
    'Palau', 
    'Palestinian Territory, Occupied', 
    'Panama',
    'Papua New Guinea', 
    'Paraguay', 
    'Peru', 
    'Philippines', 
    'Pitcairn', 
    'Poland', 
    'Portugal', 
    'Puerto Rico', 
    'Qatar', 
    'Reunion', 
    'Romania', 
    'Russian Federation', 
    'RWANDA', 
    'Saint Helena', 
    'Saint Kitts and Nevis', 
    'Saint Lucia', 
    'Saint Pierre and Miquelon', 
    'Saint Vincent and the Grenadines', 
    'Samoa',
    'San Marino', 
    'Sao Tome and Principe', 
    'Saudi Arabia', 
    'Senegal', 
    'Serbia and Montenegro', 
    'Seychelles', 
    'Sierra Leone', 
    'Singapore', 
    'Slovakia', 
    'Slovenia', 
    'Solomon Islands', 
    'Somalia', 
    'South Africa', 
    'South Georgia and the South Sandwich Islands', 
    'Spain', 
    'Sri Lanka', 
    'Sudan', 
    'Suriname', 
    'Svalbard and Jan Mayen', 
    'Swaziland', 
    'Sweden', 
    'Switzerland', 
    'Syrian Arab Republic', 
    'Taiwan, Province of China', 
    'Tajikistan', 
    'Tanzania, United Republic of', 
    'Thailand', 
    'Timor-Leste', 
    'Togo', 
    'Tokelau', 
    'Tonga', 
    'Trinidad and Tobago', 
    'Tunisia', 
    'Turkey', 
    'Turkmenistan', 
    'Turks and Caicos Islands', 
    'Tuvalu',
    'Uganda', 
    'Ukraine', 
    'United Arab Emirates', 
    'United Kingdom', 
    'United States', 
    'United States Minor Outlying Islands', 
    'Uruguay',
    'Uzbekistan', 
    'Vanuatu', 
    'Venezuela', 
    'Viet Nam', 
    'Virgin Islands, British', 
    'Virgin Islands, U.S.', 
    'Wallis and Futuna', 
    'Western Sahara', 
    'Yemen', 
    'Zambia', 
    'Zimbabwe',
  ],
}

// ! COUNT ! \\
let winCount = 0
let count = 0

let chosenWord = ""

// ! OPTION BUTTONS ! \\
const displayOptions = () => {
  optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`

  let buttonCon = document.createElement("div")

  for (let value in options) {

    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`
  }

  optionsContainer.appendChild(buttonCon)

};

// ! BLOCK BUTTONS ! \\

const blocker = () => {

    let optionsButtons = document.querySelectorAll(".options")

    let letterButtons = document.querySelectorAll(".letters")
// !DISABLE ALL BUTTONS ! \\

optionsButtons.forEach((button) => {

    button.disabled = true

});

  //! DISABLE ALL LETTERS ! \\

  letterButtons.forEach((button) => {

    button.disabled.true

});

newGameContainer.classList.remove("hide")

}

// ! WORD GENERATE ! \\

const generateWord = (optionValue) => {

    let optionsButtons = document.querySelectorAll(".options")

    // ! IF OPTION MATCHES THE BUTTON VALUE ! \\

  optionsButtons.forEach((button) => {
    
    if (button.innerText.toLowerCase() === optionValue) {
    
        button.classList.add("active")
    
    }
    
    button.disabled = true
  
})

//  ! HIDE LETTERS , DELETE THE PREVIOUS WORD ! \\

  letterContainer.classList.remove("hide")

  userInputSection.innerText = ""

  let optionArray = options[optionValue]
  
//   ! CHOOSE RANDOM WORD ! \\

  chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)]

  chosenWord = chosenWord.toUpperCase()
  
  let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>')

  userInputSection.innerHTML = displayItem
  
};

// ! NEW GAME FUNCTION OR LOAD THE PAGE FUNCTION ! \\

const initializer = () => {

    winCount = 0

    count = 0

// ! HIDE LETTERS AND NEW GAME STUFF ! \\

  userInputSection.innerHTML = ""

  optionsContainer.innerHTML = ""

  letterContainer.classList.add("hide")

  newGameContainer.classList.add("hide")

  letterContainer.innerHTML = ""

  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button")
    
    button.classList.add("letters")
    
    button.innerText = String.fromCharCode(i)
    
    button.addEventListener("click", () => {
    
        let charArray = chosenWord.split("")
    
        let dashes = document.getElementsByClassName("dashes")
    

    
        if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          
          if (char === button.innerText) {
            
            dashes[index].innerText = char
            
            winCount += 1
            
            if (winCount == charArray.length) {
              resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`
              
              blocker()
            }
          }
        })
      } else {
        
        count += 1
        
        drawMan(count)
        
        if (count == 6) {
          resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`
          blocker()
        }
      }

      button.disabled = true
    })
    letterContainer.append(button)
  }

  displayOptions()

  let { initialDrawing } = canvasCreator()
  
  initialDrawing()
}


const canvasCreator = () => {
  let context = canvas.getContext("2d")
  context.beginPath()
  context.strokeStyle = "#000"
  context.lineWidth = 2


  const drawLine = (fromX, fromY, toX, toY) => {
    context.moveTo(fromX, fromY)
    context.lineTo(toX, toY)
    context.stroke()
  };

  const head = () => {
    context.beginPath()
    context.arc(70, 30, 10, 0, Math.PI * 2, true)
    context.stroke()
  }

  const body = () => {
    drawLine(70, 40, 70, 80)
  }

  const leftArm = () => {
    drawLine(70, 50, 50, 70)
  };

  const rightArm = () => {
    drawLine(70, 50, 90, 70)
  }

  const leftLeg = () => {
    drawLine(70, 80, 50, 110)
  }

  const rightLeg = () => {
    drawLine(70, 80, 90, 110)
  }


  const initialDrawing = () => {
    
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    
    drawLine(10, 130, 130, 130)
    
    drawLine(10, 10, 10, 131)
    
    drawLine(10, 10, 70, 10)
    
    drawLine(70, 10, 70, 20)
  }

  return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg }
}


const drawMan = (count) => {
  let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator()
  switch (count) {
    case 1:
      head();
      break
    case 2:
      body();
      break
    case 3:
      leftArm();
      break
    case 4:
      rightArm();
      break
    case 5:
      leftLeg();
      break
    case 6:
      rightLeg();
      break
    default:
      break
  }
}

// ! NEW GAME ! \\
newGameButton.addEventListener("click", initializer)
window.onload = initializer