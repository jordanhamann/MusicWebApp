
//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();

//play a middle 'C' for the duration of an 8th note
document.getElementById("sound").addEventListener("click", myFunction);

function myFunction() {
    synth.triggerAttackRelease("C4", "8n");
}
