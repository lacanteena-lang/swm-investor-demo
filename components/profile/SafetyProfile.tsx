"use client";

import { useEffect, useState } from "react";

import {
  HeartPulse,
  Droplets,
  Phone,
  MapPin,
  ChevronRight,
  X,
  UserPlus,
  Pencil,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";

type SafetyItem = {
  icon: typeof Droplets;
  label: string;
  value: string;
};

type EmergencyContact = {
  name: string;
  relationship: string;
  phone: string;
};

type Address = {
  addressLine: string;
  city: string;
  state: string;
  pinCode: string;
};

const items: SafetyItem[] = [
  {
    icon: Droplets,
    label: "Blood Group",
    value: "Not Added",
  },
  {
    icon: HeartPulse,
    label: "Medical Information",
    value: "No Information",
  },
  {
    icon: Phone,
    label: "Emergency Contact",
    value: "Not Configured",
  },
  {
    icon: MapPin,
    label: "Home Address",
    value: "Not Added",
  },
];

const emptyContact = (): EmergencyContact => ({
  name: "",
  relationship: "",
  phone: "",
});

export default function SafetyProfile() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const [bloodGroup, setBloodGroup] = useState("");

  // Restore the saved blood group when the profile is opened again.
  useEffect(() => {
    const savedBloodGroup = window.localStorage.getItem("swm-blood-group");
    if (savedBloodGroup) {
      setBloodGroup(savedBloodGroup);
    }
  }, []);
  const [medicalInfo, setMedicalInfo] = useState("");

  const [contacts, setContacts] = useState<EmergencyContact[]>(
    Array.from({ length: 5 }, () => emptyContact())
  );

  const [editingContact, setEditingContact] = useState<number | null>(null);

  const [contactForm, setContactForm] =
    useState<EmergencyContact>(emptyContact());

  const [address, setAddress] = useState<Address>({
    addressLine: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const [addressForm, setAddressForm] = useState<Address>({
    addressLine: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const openItem = (label: string) => {
    if (label === "Home Address") {
      setAddressForm({ ...address });
    }

    setSelectedItem(label);
  };

  const closePanel = () => {
    setSelectedItem(null);
    setEditingContact(null);
  };

  const selectBloodGroup = (group: string) => {
    setBloodGroup(group);
    window.localStorage.setItem("swm-blood-group", group);
    setSelectedItem(null);
  };

  const saveMedicalInfo = () => {
    if (!medicalInfo.trim()) return;

    setSelectedItem(null);
  };

  const openContactEditor = (index: number) => {
    setEditingContact(index);
    setContactForm({ ...contacts[index] });
  };

  const closeContactEditor = () => {
    setEditingContact(null);
    setContactForm(emptyContact());
  };

  const saveContact = () => {
    if (
      !contactForm.name.trim() ||
      !contactForm.relationship.trim() ||
      !contactForm.phone.trim()
    ) {
      return;
    }

    setContacts((current) => {
      const updated = [...current];
      updated[editingContact ?? 0] = { ...contactForm };
      return updated;
    });

    closeContactEditor();
  };

  const contactCount = contacts.filter(
    (contact) =>
      contact.name.trim() &&
      contact.relationship.trim() &&
      contact.phone.trim()
  ).length;

  const saveAddress = () => {
    if (
      !addressForm.addressLine.trim() ||
      !addressForm.city.trim() ||
      !addressForm.state.trim() ||
      !addressForm.pinCode.trim()
    ) {
      return;
    }

    setAddress({ ...addressForm });
    setSelectedItem(null);
  };

  const addressAdded =
    address.addressLine.trim() &&
    address.city.trim() &&
    address.state.trim() &&
    address.pinCode.trim();

  return (
    <div className="relative h-full w-full">
      <GlassCard className="overflow-visible">

        {/* HEADER */}

        <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
          SAFETY PROFILE
        </p>

        <h2 className="mt-2 text-[23px] font-bold tracking-tight text-white">
          Personal Safety Information
        </h2>

        <p className="mt-2 text-[10px] leading-5 text-red-400">
          Information that can help your safety network respond when needed.
        </p>


        {/* INFORMATION */}

        <div className="mt-6 space-y-3">

          {items.map(({ icon: Icon, label, value }) => {

            let displayValue = value;

            if (label === "Blood Group") {
              displayValue = bloodGroup || "Not Added";
            }

            if (label === "Medical Information" && medicalInfo) {
              displayValue = "Information Added";
            }

            if (label === "Emergency Contact" && contactCount > 0) {
              displayValue =
                contactCount === 1
                  ? "1 Contact"
                  : `${contactCount} Contacts`;
            }

            if (label === "Home Address" && addressAdded) {
              displayValue = "Address Added";
            }

            return (
              <button
                key={label}
                type="button"
                onClick={() => openItem(label)}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-3
                  rounded-2xl
                  border
                  border-white/5
                  bg-white/[0.04]
                  p-4
                  text-left
                  transition-all
                  duration-300
                  hover:border-red-400/30
                  hover:bg-red-500/[0.06]
                  active:scale-[0.98]
                "
              >

                <div className="flex min-w-0 items-center gap-3">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-cyan-400/10
                      group-hover:bg-red-500/15
                    "
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="
                        text-cyan-300
                        group-hover:text-red-300
                      "
                    />
                  </div>

                  <div className="min-w-0">

                    <p className="truncate text-[13px] font-semibold text-white">
                      {label}
                    </p>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        font-semibold
                        text-red-300
                        drop-shadow-[0_0_7px_rgba(255,60,60,0.75)]
                      "
                    >
                      {displayValue}
                    </p>

                  </div>

                </div>

                <ChevronRight
                  size={18}
                  className="
                    shrink-0
                    text-white/30
                    group-hover:text-red-300
                  "
                />

              </button>
            );
          })}

        </div>


        {/* PRIVACY NOTE */}

        <div
          className="
            mt-5
            rounded-2xl
            border
            border-cyan-400/10
            bg-cyan-400/[0.035]
            px-4
            py-3
          "
        >
          <p className="text-[9px] font-semibold leading-5 text-red-400">
  Your safety information is used to support emergency assistance
  and can be managed from your profile settings.
</p>
            
            
          
        </div>

      </GlassCard>


      {/* =====================================================
          BLOOD GROUP
      ===================================================== */}

      {selectedItem === "Blood Group" && (
          <div
          className="
            absolute
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/75
            p-0
            backdrop-blur-md
          "
          onClick={closePanel}
        >

          <div
            className="
              relative
              flex
              h-full
              max-h-full
              w-full
              max-w-[390px]
              flex-col
              overflow-hidden
              rounded-[28px]
              border
              border-white/15
              bg-[#080d18]
              shadow-[0_0_70px_rgba(0,0,0,0.75)]
            "
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              onClick={closePanel}
              aria-label="Close"
              className="
                absolute
                right-4
                top-4
                z-20
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.06]
                text-white
                transition-all
                hover:bg-red-500/20
                hover:text-red-300
                active:scale-90
              "
            >
              <X size={20} />
            </button>

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[-100px]
                h-[220px]
                w-[220px]
                -translate-x-1/2
                rounded-full
                bg-red-600/15
                blur-[80px]
              "
            />

            <div className="relative z-10 shrink-0 p-6 pb-6">

              <p className="text-[10px] font-bold uppercase tracking-[0.30em] text-cyan-300">
                SAFETY PROFILE
              </p>

              <h3 className="mt-3 text-[28px] font-bold text-white">
                Blood Group
              </h3>

              <p className="mt-2 pr-8 text-[12px] leading-6 text-white/55">
                Select your blood group. Your selection will be saved to your
                safety profile.
              </p>

              <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.20em] text-white">
                Select Blood Group
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3">

                {[
                  "A+",
                  "A-",
                  "B+",
                  "B-",
                  "AB+",
                  "AB-",
                  "O+",
                  "O-",
                ].map((group) => (

                  <button
                    key={group}
                    type="button"
                    onClick={() => selectBloodGroup(group)}
                    className="
                      h-14
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.05]
                      text-[15px]
                      font-bold
                      text-white
                      transition-all
                      duration-200
                      hover:border-red-400/60
                      hover:bg-red-500/15
                      hover:text-red-200
                      hover:shadow-[0_0_22px_rgba(255,0,0,0.25)]
                      active:scale-95
                    "
                  >
                    {group}
                  </button>

                ))}

              </div>

              <p className="mt-5 text-center text-[10px] text-white/35">
                Tap your blood group to save it.
              </p>

            </div>

          </div>

        </div>

        )}


      {/* =====================================================
          MEDICAL INFORMATION
      ===================================================== */}

      {selectedItem === "Medical Information" && (
          <div
          className="
            absolute
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/75
            p-0
            backdrop-blur-md
          "
          onClick={closePanel}
        >

          <div
            className="
              relative
              flex
              h-full
              max-h-full
              w-full
              max-w-[390px]
              flex-col
              overflow-hidden
              rounded-[28px]
              border
              border-white/15
              bg-[#080d18]
              shadow-[0_0_70px_rgba(0,0,0,0.75)]
            "
            onClick={(event) => event.stopPropagation()}
          >

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[-100px]
                h-[220px]
                w-[220px]
                -translate-x-1/2
                rounded-full
                bg-red-600/15
                blur-[80px]
              "
            />

            <button
              type="button"
              onClick={closePanel}
              aria-label="Close"
              className="
                absolute
                right-4
                top-4
                z-20
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.06]
                text-white
                transition-all
                hover:bg-red-500/20
                hover:text-red-300
                active:scale-90
              "
            >
              <X size={20} />
            </button>

            <div className="relative z-10 shrink-0 p-6 pb-6">

              <p className="text-[10px] font-bold uppercase tracking-[0.30em] text-cyan-300">
                SAFETY PROFILE
              </p>

              <h3 className="mt-3 text-[28px] font-bold text-white">
                Medical Information
              </h3>

              <p className="mt-2 pr-6 text-[12px] leading-6 text-white/55">
                Add important medical information that may help your safety
                network assist you when needed.
              </p>

              <div className="mt-7">

                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.20em] text-white">
                  Medical Details
                </p>

                <textarea
                  value={medicalInfo}
                  onChange={(event) =>
                    setMedicalInfo(event.target.value)
                  }
                  placeholder="e.g. allergies, medications, medical conditions..."
                  rows={5}
                  className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.05]
                    px-4
                    py-4
                    text-[13px]
                    leading-6
                    text-white
                    outline-none
                    placeholder:text-white/30
                    transition-all
                    focus:border-red-400/50
                    focus:bg-red-500/[0.04]
                    focus:shadow-[0_0_25px_rgba(255,0,0,0.10)]
                  "
                />

              </div>

              <button
                type="button"
                onClick={saveMedicalInfo}
                disabled={!medicalInfo.trim()}
                className="
                  mt-5
                  h-14
                  w-full
                  rounded-2xl
                  bg-[#880001]
                  text-[13px]
                  font-black
                  uppercase
                  tracking-[0.14em]
                  text-white
                  shadow-[0_0_22px_rgba(136,0,1,0.45)]
                  transition-all
                  hover:bg-[#a00001]
                  active:scale-[0.98]
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              >
                Save Medical Information
              </button>

              <p className="mt-4 text-center text-[10px] text-white/30">
                This information remains under your control.
              </p>

            </div>

          </div>

        </div>

        )}


      {/* =====================================================
          EMERGENCY CONTACTS
      ===================================================== */}

      {selectedItem === "Emergency Contact" && (

        <div
          className="
            absolute
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/75
            p-0
            backdrop-blur-md
          "
          onClick={closePanel}
        >

          <div
            className="
              relative
              flex
              h-full
              max-h-full
              w-full
              max-w-[390px]
              flex-col
              overflow-hidden
              rounded-[28px]
              border
              border-white/15
              bg-[#080d18]
              shadow-[0_0_70px_rgba(0,0,0,0.75)]
            "
            onClick={(event) => event.stopPropagation()}
          >

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[-120px]
                h-[240px]
                w-[240px]
                -translate-x-1/2
                rounded-full
                bg-red-600/15
                blur-[85px]
              "
            />

            <div className="relative z-10 shrink-0 p-6 pb-4">

              <button
                type="button"
                onClick={closePanel}
                aria-label="Close"
                className="
                  absolute
                  right-4
                  top-4
                  z-20
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.06]
                  text-white
                  transition-all
                  hover:bg-red-500/20
                  hover:text-red-300
                  active:scale-90
                "
              >
                <X size={20} />
              </button>

              <p className="text-[10px] font-bold uppercase tracking-[0.30em] text-cyan-300">
                SAFETY NETWORK
              </p>

              <h3 className="mt-3 pr-10 text-[27px] font-bold text-white">
                Emergency Contacts
              </h3>

              <p className="mt-2 pr-8 text-[12px] leading-6 text-white/55">
                Add up to 5 people you trust to be contacted when support is
                needed.
              </p>

              <div className="mt-4 flex items-center gap-2">

                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-red-400
                    shadow-[0_0_10px_rgba(255,60,60,0.9)]
                  "
                />

                <span className="text-[11px] font-bold text-red-300">
                  {contactCount}/5 CONTACTS ADDED
                </span>

              </div>

            </div>

            <div className="relative z-10 flex-1 overflow-y-auto px-6 pb-6">

              <div className="space-y-3">

                {contacts.map((contact, index) => {

                  const isAdded =
                    contact.name.trim() &&
                    contact.relationship.trim() &&
                    contact.phone.trim();

                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => openContactEditor(index)}
                      className="
                        group
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.045]
                        p-4
                        text-left
                        transition-all
                        hover:border-red-400/30
                        hover:bg-red-500/[0.06]
                        active:scale-[0.98]
                      "
                    >

                      <div
                        className={`
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          ${
                            isAdded
                              ? "border-emerald-400/20 bg-emerald-400/10"
                              : "border-white/10 bg-white/[0.04]"
                          }
                        `}
                      >
                        <span
                          className={`
                            text-[14px]
                            font-black
                            ${
                              isAdded
                                ? "text-emerald-300"
                                : "text-white/45"
                            }
                          `}
                        >
                          {index + 1}
                        </span>
                      </div>

                      <div className="min-w-0 flex-1">

                        <p className="truncate text-[14px] font-bold text-white">
                          {isAdded
                            ? contact.name
                            : index === 0
                              ? "Primary Contact"
                              : `Emergency Contact ${index + 1}`}
                        </p>

                        <p className="mt-1 truncate text-[10px] text-white/45">
                          {isAdded
                            ? `${contact.relationship} • ${contact.phone}`
                            : "Not added yet"}
                        </p>

                      </div>

                      <div className="shrink-0">

                        {isAdded ? (
                          <Pencil
                            size={17}
                            className="
                              text-white/35
                              group-hover:text-red-300
                            "
                          />
                        ) : (
                          <UserPlus
                            size={19}
                            className="
                              text-cyan-300
                              group-hover:text-red-300
                            "
                          />
                        )}

                      </div>

                    </button>
                  );
                })}

              </div>

              <div
                className="
                  mt-5
                  rounded-2xl
                  border
                  border-cyan-400/10
                  bg-cyan-400/[0.035]
                  p-4
                "
              >
                <p className="text-[10px] leading-5 text-white/45">
                  Your emergency contacts are used only to support safety
                  escalation when needed.
                </p>
              </div>

            </div>

          </div>

        </div>

      )}


      {/* =====================================================
          EMERGENCY CONTACT EDITOR
      ===================================================== */}

      {editingContact !== null && (

        <div
          className="
            fixed
            inset-0
            z-[1000]
            flex
            items-center
            justify-center
            bg-black/80
            p-5
            backdrop-blur-md
          "
          onClick={closeContactEditor}
        >

          <div
            className="
              relative
              w-full
              max-w-[390px]
              rounded-[28px]
              border
              border-white/15
              bg-[#080d18]
              p-6
              shadow-[0_0_70px_rgba(0,0,0,0.8)]
            "
            onClick={(event) => event.stopPropagation()}
          >

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[-100px]
                h-[220px]
                w-[220px]
                -translate-x-1/2
                rounded-full
                bg-red-600/15
                blur-[80px]
              "
            />

            <button
              type="button"
              onClick={closeContactEditor}
              aria-label="Close"
              className="
                absolute
                right-4
                top-4
                z-20
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.06]
                text-white
                transition-all
                hover:bg-red-500/20
                hover:text-red-300
                active:scale-90
              "
            >
              <X size={20} />
            </button>

            <div className="relative z-10">

              <p className="text-[10px] font-bold uppercase tracking-[0.30em] text-cyan-300">
                EMERGENCY CONTACT {editingContact + 1}
              </p>

              <h3 className="mt-3 text-[27px] font-bold text-white">
                {editingContact === 0
                  ? "Primary Contact"
                  : `Contact ${editingContact + 1}`}
              </h3>

              <p className="mt-2 pr-8 text-[12px] leading-6 text-white/55">
                Add someone you trust to your emergency safety network.
              </p>

              <div className="mt-6">

                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
                  Full Name
                </label>

                <input
                  value={contactForm.name}
                  onChange={(event) =>
                    setContactForm({
                      ...contactForm,
                      name: event.target.value,
                    })
                  }
                  placeholder="Enter full name"
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.05]
                    px-4
                    text-[13px]
                    text-white
                    outline-none
                    placeholder:text-white/30
                    focus:border-red-400/50
                    focus:bg-red-500/[0.04]
                  "
                />

              </div>

              <div className="mt-4">

                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
                  Relationship
                </label>

                <input
                  value={contactForm.relationship}
                  onChange={(event) =>
                    setContactForm({
                      ...contactForm,
                      relationship: event.target.value,
                    })
                  }
                  placeholder="e.g. Spouse, Parent, Friend"
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.05]
                    px-4
                    text-[13px]
                    text-white
                    outline-none
                    placeholder:text-white/30
                    focus:border-red-400/50
                    focus:bg-red-500/[0.04]
                  "
                />

              </div>

              <div className="mt-4">

                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
                  Phone Number
                </label>

                <input
                  type="tel"
                  value={contactForm.phone}
                  onChange={(event) =>
                    setContactForm({
                      ...contactForm,
                      phone: event.target.value,
                    })
                  }
                  placeholder="Enter phone number"
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.05]
                    px-4
                    text-[13px]
                    text-white
                    outline-none
                    placeholder:text-white/30
                    focus:border-red-400/50
                    focus:bg-red-500/[0.04]
                  "
                />

              </div>

              <button
                type="button"
                onClick={saveContact}
                disabled={
                  !contactForm.name.trim() ||
                  !contactForm.relationship.trim() ||
                  !contactForm.phone.trim()
                }
                className="
                  mt-6
                  h-14
                  w-full
                  rounded-2xl
                  bg-[#880001]
                  text-[13px]
                  font-black
                  uppercase
                  tracking-[0.14em]
                  text-white
                  shadow-[0_0_22px_rgba(136,0,1,0.45)]
                  transition-all
                  hover:bg-[#a00001]
                  active:scale-[0.98]
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              >
                Save Contact
              </button>

            </div>

          </div>

        </div>

      )}


      {/* =====================================================
          HOME ADDRESS
      ===================================================== */}

      {selectedItem === "Home Address" && (
          <div
          className="
            absolute
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/75
            p-0
            backdrop-blur-md
          "
          onClick={closePanel}
        >

          <div
            className="
              relative
              flex
              h-full
              max-h-full
              w-full
              max-w-[390px]
              flex-col
              overflow-hidden
              rounded-[28px]
              border
              border-white/15
              bg-[#080d18]
              shadow-[0_0_70px_rgba(0,0,0,0.75)]
            "
            onClick={(event) => event.stopPropagation()}
          >

            {/* RED GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[-100px]
                h-[220px]
                w-[220px]
                -translate-x-1/2
                rounded-full
                bg-red-600/15
                blur-[80px]
              "
            />


            {/* CLOSE */}

            <button
              type="button"
              onClick={closePanel}
              aria-label="Close"
              className="
                absolute
                right-4
                top-4
                z-20
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.06]
                text-white
                transition-all
                hover:bg-red-500/20
                hover:text-red-300
                active:scale-90
              "
            >
              <X size={20} />
            </button>


            {/* CONTENT */}

            <div className="relative z-10 shrink-0 p-6 pb-6">

              <p className="text-[10px] font-bold uppercase tracking-[0.30em] text-cyan-300">
                SAFETY PROFILE
              </p>

              <h3 className="mt-3 text-[28px] font-bold text-white">
                Home Address
              </h3>

              <p className="mt-2 pr-6 text-[12px] leading-6 text-white/55">
                Add your home address to help your safety network understand
                your location when assistance is needed.
              </p>


              {/* ADDRESS */}

              <div className="mt-6">

                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
                  Address
                </label>

                <input
                  value={addressForm.addressLine}
                  onChange={(event) =>
                    setAddressForm({
                      ...addressForm,
                      addressLine: event.target.value,
                    })
                  }
                  placeholder="House / Flat / Street"
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.05]
                    px-4
                    text-[13px]
                    text-white
                    outline-none
                    placeholder:text-white/30
                    focus:border-red-400/50
                    focus:bg-red-500/[0.04]
                  "
                />

              </div>


              {/* CITY + STATE */}

              <div className="mt-4 grid grid-cols-2 gap-3">

                <div>

                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
                    City
                  </label>

                  <input
                    value={addressForm.city}
                    onChange={(event) =>
                      setAddressForm({
                        ...addressForm,
                        city: event.target.value,
                      })
                    }
                    placeholder="City"
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.05]
                      px-4
                      text-[13px]
                      text-white
                      outline-none
                      placeholder:text-white/30
                      focus:border-red-400/50
                      focus:bg-red-500/[0.04]
                    "
                  />

                </div>


                <div>

                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
                    State
                  </label>

                  <input
                    value={addressForm.state}
                    onChange={(event) =>
                      setAddressForm({
                        ...addressForm,
                        state: event.target.value,
                      })
                    }
                    placeholder="State"
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.05]
                      px-4
                      text-[13px]
                      text-white
                      outline-none
                      placeholder:text-white/30
                      focus:border-red-400/50
                      focus:bg-red-500/[0.04]
                    "
                  />

                </div>

              </div>


              {/* PIN */}

              <div className="mt-4">

                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
                  PIN Code
                </label>

                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={addressForm.pinCode}
                  onChange={(event) =>
                    setAddressForm({
                      ...addressForm,
                      pinCode: event.target.value.replace(/\D/g, ""),
                    })
                  }
                  placeholder="6-digit PIN code"
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.05]
                    px-4
                    text-[13px]
                    text-white
                    outline-none
                    placeholder:text-white/30
                    focus:border-red-400/50
                    focus:bg-red-500/[0.04]
                  "
                />

              </div>


              {/* SAVE */}

              <button
                type="button"
                onClick={saveAddress}
                disabled={
                  !addressForm.addressLine.trim() ||
                  !addressForm.city.trim() ||
                  !addressForm.state.trim() ||
                  !addressForm.pinCode.trim()
                }
                className="
                  mt-6
                  h-14
                  w-full
                  rounded-2xl
                  bg-[#880001]
                  text-[13px]
                  font-black
                  uppercase
                  tracking-[0.14em]
                  text-white
                  shadow-[0_0_22px_rgba(136,0,1,0.45)]
                  transition-all
                  hover:bg-[#a00001]
                  active:scale-[0.98]
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              >
                Save Home Address
              </button>

              <p className="mt-4 text-center text-[10px] text-white/30">
                Your address remains under your control.
              </p>

            </div>

          </div>

        </div>

        )}

    </div>
  );
}