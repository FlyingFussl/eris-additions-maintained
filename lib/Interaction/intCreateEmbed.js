module.exports = Eris => {
    Eris.Interaction.prototype.createEmbed = function(embed) {
        return this.createMessage({ embed: embed });
    };

    Eris.Interaction.prototype.createFollowEmbed = function(embed) {
        return this.createFollowup({ embed: embed });
    };
};