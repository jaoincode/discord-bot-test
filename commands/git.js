const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const exampleEmbed = new EmbedBuilder()
  .setColor("0x0099ff")
  .setTitle("Comandos GIT")

  .setThumbnail(
    "https://blog.geekhunter.com.br/wp-content/uploads/2020/08/comandos-git.png"
  )
  .addFields(
    { name: "\u200B", value: "\u200B" },
    {
      name: "$ git init",
      value: "Inicializa o git no diretório",
      inline: true,
    },
    {
      name: "$ git clone [url]",
      value: "Baixa um projeto e seu histórico de versão inteiro",
      inline: true,
    },
    {
      name: "$ git stash",
      value:
        "Armazena temporariamente todos os aruqivos monitorados modificados",
      inline: true,
    }
  )
  .setFooter({
    text: "Fiquei com preguiça de terminar",
    iconURL: "https://i.imgur.com/AfFp7pu.png",
  });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("git")
    .setDescription("Ver comandos do git"),

  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed] });
  },
};
