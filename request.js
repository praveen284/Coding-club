
let projectsSection = document.getElementById("projects");
let projectSubmit = document.getElementById("projectSubmit");

// deleting the review
function onDeleteProject(innerDivId) {
    let projectDiv = document.getElementById(innerDivId);
    projectsSection.removeChild(projectDiv);
    projectArray.splice(innerDivId - 1, 1);
    localStorage.setItem("projectArray", JSON.stringify(projectArray));

}

// creating the project
function createAndAppendProject(newProject, projectsCount) {
    // creating the tags
    let innerDiv = document.createElement("div");
    let innerDivId = projectsCount;
    let h3Element = document.createElement("h3");
    let h5Element = document.createElement("h5");
    let h6Element = document.createElement("h6");
    let pElement = document.createElement("p");
    let deleteIcon = document.createElement("i");

    // adding class and id attributes to innerDiv
    innerDiv.id = innerDivId;
    innerDiv.classList.add("col-8", "innerDiv");

    // adding class and id attributes to elements
    h5Element.classList.add("innerDiv-h5");
    deleteIcon.setAttribute("id", "delete");
    deleteIcon.classList.add("fa-solid", "fa-trash-can");

    // appending innerDiv to projectsSection
    projectsSection.appendChild(innerDiv);

    // appending all elements innerDiv
    innerDiv.appendChild(h3Element);
    innerDiv.appendChild(h5Element);
    innerDiv.appendChild(h6Element);
    innerDiv.appendChild(pElement);
    innerDiv.appendChild(deleteIcon);

    // assigning values to the elements
    h3Element.innerHTML = newProject.userName;
    h5Element.innerHTML = newProject.projectName;
    h6Element.innerHTML = newProject.requiredSkills;
    pElement.innerHTML = newProject.projectDescription;

    // by clicking on the delete icon
    deleteIcon.onclick = function () {
        onDeleteProject(innerDivId);
    }
}


function projectArrayFromLocalStorage() {
    let stringifiedProjectArray = localStorage.getItem("projectArray");
    let parseProjectArray = JSON.parse(stringifiedProjectArray);
    if (parseProjectArray === null) {
        return [];
    } else {
        return parseProjectArray;
    }
}


let projectArray = projectArrayFromLocalStorage();


for (let i = 0; i < projectArray.length; i++) {
    createAndAppendProject(projectArray[i], i + 1);
}



// adding review after clicking
function addProject() {
    let projectsCount = projectArray.length;
    projectsCount += 1;

    let inputProjectName = document.getElementById("projectName");
    let inputUserName = document.getElementById("userName");
    let inputRequireSkills = document.getElementById("requiredSkills");
    let inputProjectDescription = document.getElementById("projectDescription");

    let projectNameErrorMsg = document.getElementById("projectNameErrorMsg");
    let userNameErrorMsg = document.getElementById("userNameErrorMsg");
    let requiredSkillsErrorMsg = document.getElementById("requiredSkillsErrorMsg");
    let projectDescErrorMsg = document.getElementById("projectDescErrorMsg");

    let newProject = {
        projectName: inputProjectName.value,
        userName: inputUserName.value,
        requiredSkills: inputRequireSkills.value,
        projectDescription: inputProjectDescription.value
    }

    if (newProject.projectName !== "") {
        if (newProject.userName !== "") {
            if (newProject.requiredSkills !== "") {
                if (newProject.projectDescription !== "") {
                    projectArray.push(newProject);
                    localStorage.setItem("projectArray", JSON.stringify(projectArray));
                    createAndAppendProject(newProject, projectsCount);
                    inputProjectName.value = "";
                    inputUserName.value = "";
                    inputRequireSkills.value = "";
                    inputProjectDescription.value = "";
                    projectNameErrorMsg.innerHTML = "";
                    userNameErrorMsg.innerHTML = "";
                    requiredSkillsErrorMsg.innerHTML = "";
                    projectDescErrorMsg.innerHTML = "";
                } else {
                    projectDescErrorMsg.innerHTML = "Required *";
                    requiredSkillsErrorMsg.innerHTML = "";
                }
            } else {
                requiredSkillsErrorMsg.innerHTML = "Required *";
                userNameErrorMsg.innerHTML = "";
            }
        } else {
            userNameErrorMsg.innerHTML = "Required *";
            projectNameErrorMsg.innerHTML = "";
        }
    } else {
        projectNameErrorMsg.innerHTML = "Required *"
    }
}

// by clicking on submit button
projectSubmit.onclick = function () {
    addProject();
}




