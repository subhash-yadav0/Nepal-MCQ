document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        // Each question object is structured as follows:
        // { question: 'Question text', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], answer: 'Correct Option' }
        // {
        //     question: "The system: x − y = 7; −x + y = 3 has ……….",
        //     options: ["one solution", "no solution ", "infinitely many solutions", "two solutions"],
        //     answer: "no solution "
        // },
        // {
        //     question: "The vectors 𝐚 = (2, 3)and 𝐛 = (4, 6) are ……….",
        //     options: ["Linearly dependent", "Orthogonal", "Parallel", "linearly independent "],
        //     answer: "Linearly dependent"
        // },
        
        {
            question: "A wire is stretched to double its length. The stress produced is",
            options: ["equals to Y", "Less than Y", "greater than Y", "none"],
            answer: "equals to Y"
        },
        {
            question: "Rms velocity of gas molecule is directly proportional to",
            options: ["Temperature", "Square root of temperature", "Pressure", "Square root of the pressure"],
            answer: "Square root of temperature"
        },
        {
            question: "A car of mass 'm' moving with speed 'v' is stopped at a distance 'x' by the friction between the tyres and the road. If K.E. of the car is doubled, stopping distance will be",
            options: ["8x", "4x", "2x", "x"],
            answer: "2x"
        },
        {
            question: "Ignition occurs in petrol engine from",
            options: ["compression of air at high temperature", "compression of fuel at high temperature", "by spark", "none"],
            answer: "by spark"
        },
        {
            question: "Rain drops of equal size fall in air with terminal velocity of 2 cm/s. A drop formed by coalescing 27 drops obtain a terminal velocity of",
            options: ["54 cm/s", "108 cm/s", "18 cm/s", "6 cm/s"],
            answer: "18 cm/s"
        },
        {
            question: "The instrument used for measuring electric current is",
            options: ["ammeter", "voltmeter", "potentiometer", "wattmeter"],
            answer: "ammeter"
        },
        {
            question: "The collision in which the relative velocity after collision is zero is",
            options: ["perfectly elastic collision", "perfectly inelastic collision", "semi elastic collision", "may be elastic or inelastic"],
            answer: "perfectly inelastic collision"
        },
        {
            question: "The diesel engines are also known as ..................... Engine",
            options: ["compression ignition", "spark ignition", "dual ignition", "otto ignition"],
            answer: "compression ignition"
        },
        {
            question: "A fuse wire of radius 0.2 mm blows when current flowing is 5A. Value of current for another fuse wire of same material of radius 0.3 mm to blow is",
            options: ["5 A", "9.2 A", "12.4 A", "20 A"],
            answer: "9.2 A"
        },
        {
            question: "When a woolen sweater worm over a nylon shirt is removed, sparking is observed due to",
            options: ["Static electricity", "Current electricity", "None", "Both"],
            answer: "Static electricity"
        },
        {
            question: "Two bulbs A and B are placed respectively at 20cms and 30cms on opposite sides of an oily paper screen.The two sides of the screen are equally intense.The ratio of power of the bulb A to that of B will be",
            options: ["4:9", "9:4", "2:3", "3:2"],
            answer: "4:9"
        },
        {
            question: "The frequency of a fork A is 3% more than the frequency of a standard fork whereas the frequency of fork B is 3% less. If fork A and B produce 6 beats per second the frequency of standard fork will be",
            options: ["100 Hz", "106 Hz", "103 Hz", "112 Hz"],
            answer: "100 Hz"
        },
        {
            question: "A square frame of side L is dipped in a liquid soap.When it is taken out of the liquid a soap film is formed on it . If the surface tension of soap is T, then the force acting on frame is,",
            options: ["2TL", "4TL", "8TL", "10TL"],
            answer: "8TL"
        },
        {
            question: "A spring is in simple harmonic motion.If the mass of the pendulum is increased by 4 times the time period of the pendulum will",
            options: ["increases by 4 times", "decreases by 4 times", "increases by 2 times", "increases by 1/2 times"],
            answer: "increases by 2 times"
        },
        {
            question: "The image, of a virtual object, produced by a convex mirror is",
            options: ["inverted", "diminished", "virtual", "real"],
            answer: "real"
        },
        {
            question: "Sound energy is converted into electrical energy in",
            options: ["Loudspeaker", "microphone", "sonometer", "radio"],
            answer: "microphone"
        },
        {
            question: "With the rise in temperature, surface tension",
            options: ["Increases", "Decreases", "Remains the same", "Becomes zero"],
            answer: "Decreases"
        },
        {
            question: "A horse pulls a wagon. The force that horse gets from is :",
            options: ["It exerts on the wagon", "The wagon exerts on him", "It exerts on the ground", "The ground exerts on him"],
            answer: "The ground exerts on him"
        },
        {
            question: "Fraunhoffer's spectrum of sun is :",
            options: ["Band absorption spectrum in chromosphere", "Line absorption spectrum in chromosphere", "Emission spectrum", "Band emission spectrum"],
            answer: "Line absorption spectrum in chromosphere"
        },
        {
            question: "Two gaseous molecule of mass M1 and M2 has mean square speed as:",
            options: ["√M1/M2", "√M2/M1", "M2/M1", "M1/M2"],
            answer: "√M2/M1"
        },
        {
            question: "N - atom of sample disintegrate in K α - particle/sec. Then half life of sample is",
            options: ["N/K", "0.693 N/K", "0.693 K/N", "K/N"],
            answer: "0.693 N/K"
        },
        {
            question: "A sodium surface is illuminated with light having a wave length of 300nm. The work function for sodium metal is 2.46eV. The maximum kinetic energy of the ejected photoelectrons is",
            options: ["4.13eV", "2.4ev", "1.67ev", "6.59eV"],
            answer: "1.67ev"
        },
        {
            question: "If kinetic energy of a particle is increased by four times the De-Brogile wavelength becomes",
            options: ["2 times", "1/2 times", "1/√2 times", "√2 times"],
            answer: "1/2 times"
        },
        {
            question: "If the Earth suddenly looses quality to attract things",
            options: ["The mass will vanish", "The weight will vanish", "Both weight and mass will vanish", "None of the above"],
            answer: "The weight will vanish"
        },
        {
            question: "An alpha particle makes a complete revolution in circular path of radius 0.8m in 2 seconds.The magnetic field induction in Tesla at the centre of the circle will be",
            options: ["0.5∗10^(−19)μo", "0.3∗10^(−19)μo", "1.0∗10^(−19)μo", "0.2∗10^(−19)μo"],
            answer: "1.0∗10^(−19)μo"
        },
        {
            question: "When a rod of length 2m carrying current 10 A is placed perpendicular to magnetic flux density of strength of 0.15 T. What is the force experienced by it ?",
            options: ["2 N", "0.3 N", "1 N", "3 N"],
            answer: "3 N"
        },
        {
            question: "A wire resistance 16 ohm is bent into circular form. Then equivalent resistance between two points of any diameter is",
            options: ["8Ω", "32Ω", "16Ω", "4Ω"],
            answer: "4Ω"
        },
        {
            question: "Two metal strips that constitute a thermostat must necessarily differ in their",
            options: ["mass", "length", "resistivity", "coefficient of linear expansion"],
            answer: "coefficient of linear expansion"
        },
        {
            question: "On penetrating a uniform charged sphere, the electrical field strength E",
            options: ["remains unchanged", "decreases", "increases", "is zero at all points"],
            answer: "is zero at all points"
        },
        {
            question: "The colors of thin films result due to",
            options: ["interference of light", "dispersion of light", "scattering of light", "selective absorption of light"],
            answer: "interference of light"
        },
        {
            question: "8 small drop of capacitance and radius 'r' combines to form a big drop of radius 'R' then the capacitance of big drop will be",
            options: ["2 C", "4 C", "8 C", "16 C"],
            answer: "2 C"
        },
        {
            question: "Two sound waves of equal intensity I produce beats. The maximum intensity of sound produced in beats will be",
            options: ["I", "2 I", "2√2 I", "4 I"],
            answer: "4 I"
        },
        {
            question: "Which is scalar quantity?",
            options: ["temperature gradient", "intensity of magnetization", "intensity of radiation", "current density"],
            answer: "intensity of radiation"
        },
        {
            question: "In Young's double slit experiment, 12 fringes are obtained in a certain fragment of the screen when light of wavelength 600 nm is used. If the wave length of light is changed to 400 nm, number of fringes obtained in the same segment of the screen will be:",
            options: ["12", "18", "24", "30"],
            answer: "18"
        },
        {
            question: "A man heard the thunder 6 seconds later he saw a lightning. The temperature of air is 27°C. How far was the flash of light from the man? (Velocity of sound in air at 0°C is 332 m/s)",
            options: ["1822 m", "2332 m", "2088 m", "2445 m"],
            answer: "2088 m"
        },
        {
            question: "A wooden block of volume 1000cc is suspended from a spring balance. Its weight is 12N in air. It is suspended in water such that half of the block is below the surface of water. Reading of spring balance will be",
            options: ["10N", "9N", "8N", "7N"],
            answer: "7N"
        },
        {
            question: "An X-ray tube is operated at 20kV. The maximum speed of electrons striking the anticathode will be",
            options: ["4.2∗(10^7) m/s", "8.4∗(10^7) m/s", "8.4∗(10^3) m/s", "4.8∗(10^7) m/s"],
            answer: "8.4∗(10^7) m/s"
        },
        {
            question: "Displacement of particle with respect to time t is x = (ao)+2(a1)t+(a2)(t^2). The acceleration is",
            options: ["ao", "a1", "a2", "2(a2)"],
            answer: "2(a2)"
        },
        {
            question: "Radius of electron moving in a magnetic field in a perpendicular direction is proportional to:",
            options: ["Momentum", "Magnetic field", "Charge of electron", "Potential"],
            answer: "Momentum"
        },
        {
            question: "A body is projected with a velocity equal to twice the escape velocity(ve) from the earth. The velocity of the body in free space will be",
            options: ["ve", "1.5ve", "√2ve", "√3ve"],
            answer: "√3ve"
        },
        {
            question: "A diffraction pattern is obtained using a beam of red light. What happens if the red light is replaced by blue light?",
            options: ["no change", "diffraction bands become broader and recorded", "bands become broader and further apart", "bands may disappear"],
            answer: "bands may disappear"
        },
        {
            question: "The objective of a terrestrial telescope has a focal length of 50 cm and its magnifying power is 10 when adjusted for parallel rays. If the erecting lens has a focal length 15 cm, the total length of such a telescope is",
            options: ["65 cm", "75 cm", "95 cm", "115 cm"],
            answer: "115 cm"
        },
        {
            question: "A ray of light is incident at an angle of incidence ‘i’ on one surface of a prism of small refracting angle ‘A’ and emerges normally from the opposite surface. If the R.I. of the material of the prism is μ, the angle of incidence ‘i’ is equal to",
            options: ["A/μ", "A/(2μ)", "μA", "μ(A/2)"],
            answer: "μA"
        },
        {
            question: "An air parallel plate capacitor has capacity C. When capacity and distance between the plates are doubled and immersed in a liquid, then the dielectric constant of the liquid is",
            options: ["1", "2", "3", "4"],
            answer: "4"
        },
        {
            question: "A refrigerator has to transfer an average of 263J of heat per second from -10°C to 25°C. The average power consumed by the refrigerator is",
            options: ["10W", "20W", "35W", "40W"],
            answer: "35W"
        },
        {
            question: "The instrument used to measure energy is:",
            options: ["currentmeter", "voltmeter", "watt-hour meter", "ammeter"],
            answer: "watt-hour meter"
        },
        {
            question: "The pressure at the end of compression in a petrol engine compared to that of a diesel engine would be",
            options: ["higher", "lower", "same", "none"],
            answer: "lower"
        },
        {
            question: "In an adiabatic process",
            options: ["Pressure is constant", "the gas is expanded isothermally", "there is perfect heat insulation", "system exchanges heat with surrounding"],
            answer: "there is perfect heat insulation"
        },
        {
            question: "When a beam of light travelling in air enters a glass block, it ordinarily undergoes change in:",
            options: ["speed only", "frequency only", "wavelength", "speed and wavelength both"],
            answer: "speed and wave length both"
        },
        {
            question: "A parallel beam of light of 6000 Å is incident normally on a slit of width 0.2 mm. A diffraction pattern is observed on a screen which is placed at a focal plane of a convex lens of focal length 50 cm. Lens is close to slit. Then the distance between minima on both sides of the central maxima will be",
            options: ["1 mm", "2 mm", "3 mm", "4 mm"],
            answer: "3 mm "
        },
        {
            question: "Heating of a current carrying conductor is due to",
            options: ["loss of kinetic energy by atoms", "loss of kinetic energy by electrons", "attraction between electrons", "repulsion between protons and electrons"],
            answer: "loss of kinetic energy by electrons"
        },
        {
            question: "Parallel circuit is",
            options: ["voltage divider circuit", "current divider circuit", "charge divider circuit", "all of these"],
            answer: "current divider circuit"
        },
        {
            question: "If the earth is assumed to be a homogeneous sphere and if it is reduced to its half size, the length of a day will be",
            options: ["48 hrs", "24 hrs", "12 hrs", "6 hrs"],
            answer: "6 hrs"
        },
        {
            question: "The sound travels with speed 300 m/s in a string. Then find the distance between two successive nodes. If frequency is 1000 Hz.",
            options: ["20 cm", "30 cm", "15 cm", "45 cm"],
            answer: "15 cm"
        },
        {
            question: "The De-Broglie wavelength of an electron is 0.01 Å. The energy of the electron in eV",
            options: ["1", "10", "100", "2.40∗10^(−15)"],
            answer: "2.40∗10^(−15)"
        },
        {
            question: "When a thin bar magnet is cut in length into two equal halves and joined one above another facing same pole together, the final time period of the magnet is equal to: (if initial time period of magnet = T)",
            options: ["T", "T/2", "T/4", "2T"],
            answer: "T/2"
        },
        {
            question: "A galvanometer with internal resistance 5Ω can sustain a maximum current of 25mA. The shunt required for maximum current of 10A is",
            options: ["12.5Ω", "0.12Ω", "0.012Ω", "1.2Ω"],
            answer: "0.012Ω"
        },
        {
            question: "When an elastic material with Young's modulus Y is subjected to stretching stress S, the elastic energy stored per unit volume of material is",
            options: ["YS/2", "(S^2)/(2Y)", "(S^2)/(Y/2)", "S/(2Y)"],
            answer: "(S^2)/(2Y)"
        },
        {
            question: "At what height from the earth does g become g/2?",
            options: ["R/2", "0.414 R", "0.7 R", "R"],
            answer: "0.414 R"
        },
        {
            question: "Ball A attached to one end of a rigid weightless rod, while an identical ball B is attached to the center of the rod. Each ball has a mass of 0.5 kg and the length of each half of the rod is 0.4 m. This arrangement is held by an empty end and is whirled around in a horizontal circle at a constant rate, so each ball is in uniform circular motion. Ball A travels at a constant speed of 4 m/s. The tension on the left of the rod is:",
            options: ["20 N", "15 N", "10 N", "5 N"],
            answer: "15 N"
        },
        {
            question: "If m and r are respectively the mass of electron and radius of the orbit in which the electron revolves about the nucleus. The moment of inertia of electron will be",
            options: ["mr²", "(1/2)∗mr²", "(2/5)∗mr²", "(2/3)∗mr²"],
            answer: "mr²"
        },
        {
            question: "A projectile thrown with a speed v at an angle θ has a range R on the surface of earth. For same v and θ, its range on the surface of moon will be .. ?",
            options: ["R/6", "6R", "R/36", "36R"],
            answer: "6R"
        },
        {
            question: "If the absolute temperature of a radiating body is suddenly halved, the radiating power will reduce approximately by",
            options: ["25%", "12.5%", "6.25%", "3.12%"],
            answer: "6.25%"
        },
        {
            question: "175 calories of heat are required to raise the temperature of 5mole of an ideal gas at constant pressure from 20°C to 25°C. The amount of heat required to raise the temperature of same gas from 20°C to 25°C constant volume will be",
            options: ["100cal", "125cal", "150cal", "175cal"],
            answer: "125cal"
        },
        {
            question: "When a 20V battery is connected across an unknown resistor there is a current of 50 mA in the circuit. Find the value of the resistance of the resistor:",
            options: ["2500 Ω", "400 Ω", "0.4 Ω", "none of these"],
            answer: "400 Ω"
        },
        {
            question: "Which of the following statement is not true, regarding the electrical set-up for the verification of Ohm’s law:",
            options: ["The voltmeter is connected in parallel with the known resistance", "The ammeter is connected in series circuit", "The rheostat can only increase the resistance in electric circuit", "The single key is used to switch on/off the electric circuit"],
            answer: "The rheostat can only increase the resistance in electric circuit"
        },
        {
            question: "Flux involved in the emf equation of a transformer has",
            options: ["RMS value", "average value", "Total value", "maximum value"],
            answer: "maximum value"
        },
        {
            question: "In parallel combination the resistance decreases due to increase in",
            options: ["area of cross section", "length", "both a and b", "none of the above"],
            answer: "area of cross section"
        },
        {
            question: "Which of the following is renewable energy?",
            options: ["petroleum", "bioethanol", "nuclear", "none"],
            answer: "bioethanol"
        },
        {
            question: "The compression ratio for petrol engine varies from",
            options: ["25 - 40", "10 - 15", "6 - 10", "15 - 25"],
            answer: "6 - 10"
        },
        {
            question: "The power available at the shaft of an IC engine is known as",
            options: ["Brake horse power", "Indicated horse power", "Frictional horse power", "none of above"],
            answer: "Brake horse power"
        },
        {
            question: "In vertically placed traffic light signals the order of signal from top to down is",
            options: ["red-green-amber", "green-amber-red", "red-amber-green", "amber-green-red"],
            answer: "red-amber-green"
        },
        {
            question: "A diffraction pattern is obtained using a beam of red light, What happen if the red light is replaced by blue light?",
            options: ["no change", "diffraction bands become broader and recorded", "bands become broader and further apart", "bands may disappear"],
            answer: "bands may disappear"
        },
        {
            question: "The fly wheel used in two stroke engine as compared to four stroke engine is",
            options: ["heavy in weight", "same in weight", "light in weight", "none"],
            answer: "light in weight"
        },
        {
            question: "When an external resistance R is connected to a cell of internal resistance r, the maximum current flows in the external resistance when",
            options: ["R<r", "R>r", "R = r", "any value of R"],
            answer: "R = r"
        },
        {
            question: "Among which of the following resistance does not depend..........",
            options: ["length of conductor", "area of cross-section", "temperature", "density"],
            answer: "density"
        },
        {
            question: "The objective of terrestrial telescope has a focal length of 50 cm and its magnifying power is 10 when adjusted for parallel rays. If the erecting lens has a focal length 15 cm, the total length of such a telescope is",
            options: ["65 cm", "75 cm", "95 cm", "115 cm"],
            answer: "115 cm"
        },
        {
            question: "A ray of light is incident at angle of incidence ‘i’ on one surface of a prism of small refracting angle ‘A’ and emerges normally from the opposite surface. If the R.I. of the material of the prism is μ; the angle of incidence ‘i’ is equal to",
            options: ["A/μ", "A/(2μ)", "μA", "μ(A/2)"],
            answer: "μA"
        },
        {
            question: "One Faraday is equal to",
            options: ["69500 coulombs", "96.5 coulombs", "96500 coulombs", "none"],
            answer: "96500 coulombs"
        },
        {
            question: "A body of moment of inertia of 3kg(m²) rotating with an angular speed of 2 rad/sec has the same kinetic energy as a mass of 12kg moving with speed of",
            options: ["2 m/s", "1 m/s", "4 m/s", "8 m/s"],
            answer: "1 m/s"
        },
        {
            question: "Some quantity of tap water is placed in an open pan and allowed to evaporate. After some time the temperature of water.",
            options: ["decreases slightly", "increases slightly", "remain same", "increases considerably"],
            answer: "decreases slightly"
        },
        {
            question: "A sample of an ideal gas occupies a volume of ‘V’ at a pressure ‘P’ and absolute temp T. The mass of each molecule is m, then density of gas is",
            options: ["mKT", "p/KT", "p/KTV", "pm/KT"],
            answer: "pm/KT"
        },
        {
            question: "Superconductors exhibit",
            options: ["Paramagnetism", "Diamagnetism", "Ferromagnetism", "Ferrimagnetism"],
            answer: "Diamagnetism"
        },
        {
            question: "A disc of radius 10 cm is rotating in magnetic field of flux density 0.4 T acting along axis. Emf of 0.08 V is developed between rims & centre of disc, then the angular frequency of disc is",
            options: ["20 /sec", "40 /sec", "60 /sec", "80 /sec"],
            answer: "40 /sec"
        },
        {
            question: "Voltmeter measures",
            options: ["rate of flow of charge per sec", "amount of energy consumed in the corresponding load", "amount of voltage drop across the load", "amount of power dissipated in the corresponding load"],
            answer: "amount of voltage drop across the load"
        },
        {
            question: "The vertical part of transformer is called",
            options: ["yoke", "limb", "insulating paper", "turn of coil"],
            answer: "limb"
        },
        {
            question: "In parallel combination, total electrical power",
            options: ["increases", "decreases", "remains same despite of adding resistance", "may both increase or decrease"],
            answer: "increases"
        },
        {
            question: "A battery of 12V is connected in series with resistors of 0.2 ohm, 0.3 ohm, 0.4 ohm, 0.5 ohm and 12 ohm. How much current would flow through the 0.3 ohm resistor:",
            options: ["0.895 A", "1.11 A", "0.5 A", "none of these"],
            answer: "0.895 A"
        },
        {
            question: "A transformer rated up to 200 KVA is",
            options: ["Power Transformer", "Distribution Transformer", "Isolation Transformer", "none"],
            answer: "Distribution Transformer"
        },
        {
            question: "A sphere of radius R is charged with charge Q. A small test charge qo is placed at a distance x from the surface of the sphere. The force experienced by the test charge is proportional to",
            options: ["1/(R+x)²", "(R + x)²", "(R−x)²", "1/(R−x)²"],
            answer: " 1/(R+x)^2"
        },
        {
            question: "How will be the image formed by a convex lens if the upper half of the lens is wrapped in black paper",
            options: ["No effect", "Brightness of image will be reduced", "Upper half of the image will be absent", "Size of the image is reduced to half"],
            answer: "Brightness of image will be reduced"
        },
        {
            question: "An astronomical telescope has a magnifying power of 10. The focal length of the eyepiece is 20 cm. The focal length of the objective is",
            options: ["2 cm", "200 cm", "1/200 cm", "0.5 cm"],
            answer: "200cm"
        },
        {
            question: "The kinetic energy of electrons released in photoelectric emission is dependent upon",
            options: ["frequency of incident light", "Intensity of incident light", "Nature of cathode surface", "Work function"],
            answer: "frequency of incident light"
        },
        {
            question: "The phenomenon of acquiring temporary electrification under the influence of a charged body is called",
            options: ["magnetic induction", "electrical induction", "capacitance", "electrolysis"],
            answer: "electrical induction"
        },
        {
            question: "A Carnot engine takes in 300 kcal of heat from a reservoir at 627°C and gives it to a sink at 27°C. The work done by the engine is",
            options: ["4.2*(10^6) J", "8.4*(10^6) J", "16.8*(10^6) J", "0"],
            answer: "8.4∗(10^6)J"
        },
        {
            question: "A whistle giving out 450 Hz approaches a stationary observer at a speed of 33 m/s. The frequency heard by the observer in Hz is",
            options: ["409", "517", "429", "500"],
            answer: "500"
        },
        {
            question: "Consider two simple pendulums, A and B having identical bobs and same time period of oscillation T1. If the bob of A is half-filled with mercury and that of B is half-filled with water, then",
            options: ["Pendulum A will have a longer time period of oscillation than that of B", "Pendulum B will have a longer time period of oscillation than that of A", "Pendulum A and Pendulum B will have the same time period of Oscillation T1", "none of the above"],
            answer: "Pendulum A will have longer time period of oscillation than that of B"
        },
        {
            question: "An AC voltage E = 200√2 sin 400t V is connected across a circuit containing a capacitor of 1μF. What is the current flow in the circuit?",
            options: ["10 mA", "20 mA", "40 mA", "80 mA"],
            answer: "55/36 Ω"
        },
        {
            question: "A circle has resistance 20Ω. Its arc subtends a 30 degree angle at its centre. What will be the equivalent resistance across the arc?",
            options: ["36/55 Ω", "36/46 Ω", "55/36 Ω", "46/36 Ω"],
            answer: "80 mA"
        },
        {
            question: "The power of a water pump is 3 kilowatts. The volume of water it can raise in one minute to a height of 10m, [assuming that g = 10m/s²] is",
            options: ["2 m³", "2.4 m³", "4 m³", "1.8 m³"],
            answer: "1.8 m^3"
        }
        
       
        
       
        //    ------------------------------------------------------------------------------






        
        //    ------------------------------------------------------------------------------

        
        
    ];

    const quizForm = document.getElementById('quizForm');
    const submitBtn = document.getElementById('submitBtn');
    const result = document.getElementById('result');

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionP = document.createElement('p');
        questionP.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionP);

        const optionsUl = document.createElement('ul');
        optionsUl.classList.add('options');

        q.options.forEach((option) => {
            const optionLi = document.createElement('li');

            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = option;

            // Check if the option is the correct answer
            if (option === q.answer) {
                optionInput.classList.add('correct');
            } else {
                optionInput.classList.add('incorrect');
            }

            const optionLabel = document.createElement('label');
            optionLabel.textContent = option;

            optionLi.appendChild(optionInput);
            optionLi.appendChild(optionLabel);
            optionsUl.appendChild(optionLi);
        });

        questionDiv.appendChild(optionsUl);
        quizForm.appendChild(questionDiv);
    });

    submitBtn.addEventListener('click', () => {
        let score = 0;

        // Loop through all questions to check answers
        questions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);

            if (selectedOption) {
                const isCorrect = selectedOption.value === q.answer;
                if (isCorrect) {
                    score++;
                }
            }
        });

        // Display the result
        result.textContent = `You scored ${score} out of ${questions.length}`;
    });
});
