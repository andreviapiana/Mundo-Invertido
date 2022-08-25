import { getHellfireClubSubscriptions, subscribeToHellfireClub } from "./firebase/hellfire-clube.js";

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');

const btnSubscribe = document.getElementById('btnSubscribe');

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    // Salvar no Banco de Dados
    const subscriptionId = await subscribeToHellfireClub(subscription);
    console.log(`Inscrito com sucesso: ${subscriptionId}`);

    //Reset do Formulário
    txtName.value = '';
    txtEmail.value = '';
    txtLevel.value = '';
    txtCharacter.value = '';
})

async function loadData() {
    const subscriptions = await getHellfireClubSubscriptions()
    console.log(subscriptions)
}

loadData();