import OBR from "https://cdn.jsdelivr.net/npm/@owlbear-rodeo/sdk@latest/dist/index.js";

const button = document.getElementById("addHpBar");

button.onclick = async () => {
  const selected = await OBR.player.getSelection();

  if (selected.length === 0) {
    alert("Seleciona pelo menos um token");
    return;
  }

  for (const id of selected) {
    const item = await OBR.scene.items.getItem(id);

    if (item.type !== "IMAGE") continue;

    await OBR.scene.items.updateItem(id, {
      metadata: {
        ...item.metadata,
        hp: 10,
        hpMax: 10
      }
    });
  }

  alert("HP adicionado aos tokens selecionados!");
};
